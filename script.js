//top

let topbox = document.getElementById('top')
let searchimg = document.getElementById('searchimg')
let input = document.getElementById('input')
let h1 = document.getElementById('h1')
let x = document.getElementById('x')
//none block
searchimg.addEventListener('click',()=>{
    topbox.style.width = '100%'
    input.style.display = 'block'
    searchimg.style.transform = 'rotate(360deg)';
    setTimeout(()=>{
        searchimg.style.display='none'
        x.style.display='flex'
    },0)
})
x.addEventListener('click',()=>{
    topbox.style.width = '50px'
    input.style.display = 'none'
    input.value = ""
    setTimeout(()=>{
        searchimg.style.display='flex'
        x.style.display='none'
    },0)
})


input.addEventListener('keydown',(tap)=>{
    if(tap.keyCode === 13){
        let city = input.value  
        let one = 'https://api.openweathermap.org/data/2.5/weather'
        let key = '651f4facecfe9d04168b0fe90783eb65'
        let two = `?q=${city}&units=metric&appid=${key}`
        let API = one+two
        console.log(API);
        
        let iconurl = 'https://openweathermap.org/img/wn/'
        let bottom = document.getElementById('bottom')
        bottom.innerHTML = ``
        fetch(API)
        .then(request => request.json())
        .then(response =>{
                let icon = iconurl+response.weather[0].icon
                let kurish = response.visibility / 1000
                //asosiy div
                let mal = document.createElement('div')
                mal.classList.add('bottom')



                mal.innerHTML = `
                    <article>
                        <h1>${response.name} | </h1>
                        <h1>${response.sys.country}</h1>
                    </article>
                    <div class = "img-weather">
                    <img src = ${icon}.png>
                    
                    </div>
                    <p class = "p">${response.weather[0].main}</p>
                    <div class = "temp">
                        <h1>${response.main.temp.toString().slice(0,2)}°C</h1>
                        <div class = "intempleft">
                            <article>
                                <img src = "./wind.png">
                                <h2>${response.wind.speed.toString().slice(0,3)}m/s</h2>
                            </article>

                            <article>
                                <img src = "./wind-direction.png">
                                <h2>${response.wind.deg}</h2>
                            </article>

                            <article>
                                <img src = "./visibility.png">
                                <h2>${kurish}km</h2>
                            </article>
                        </div>

                        <div class = "intempright">
                            <article>
                                <img src = "./cloud.png">
                                <h2>${response.clouds.all}%</h2>
                            </article>

                            <article>
                                <img src = "./humidity.png">
                                <h2>${response.main.humidity}%</h2>
                            </article>

                            <article>
                                <img src = "./blood-pressure (1).png">
                                <h2>${response.main.pressure}hPa</h2>
                            </article>

                        </div>
                    </div>
                `
                console.log(icon);
                
                bottom.appendChild(mal)
        })
        .catch(error => console.error('xato',error)
        )
    }
})


{/* <h3 class = "h3">${response.clouds.all}%</h3> */}


