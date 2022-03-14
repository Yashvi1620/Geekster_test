const apiKey = "d97ac3423a5e1ba78d0d0f346545d2f2";  
const main = document.getElementById('main');  
const form = document.getElementById('form');  
const search = document.getElementById('search'); 
var wind = document.querySelector('.wind'); 
var feels = document.querySelector('.feels');

const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;  
async function getWeatherByLocation(city){  
     const resp = await fetch(url(city), {  
       origin: "cros" });  
     const respData = await resp.json();  
      addWeatherToPage(respData);  
   }  
   function addWeatherToPage(data){  
     const temp = Ktoc(data.main.temp);  
     const weather = document.createElement('div');
     weather.classList.add('weather'); 
     var windValue = data.wind.speed;
     let temp_min = document.getElementById('temp_min');
     temp_min.innerHTML=`${Ktoc(data.main.temp_min)}&deg;C (min)/ ${Ktoc(data.main.temp_max)}&deg;C (max) `;
     wind.innerHTML = `Wind speed - ${windValue} m/s`
     var feelsLike = Ktoc(data.main.feels_like);
     feels.innerHTML = `Feels Like - ${feelsLike} °C`;
     
     
     weather.innerHTML = `  
     <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"  /></h2>  
     <small>${data.weather[0].main} </small>  
     `;  
     
     
     main.innerHTML= "";  
      main.appendChild(weather);  
      main.appendChild(temp_min);
      main.appendChild(wind);
      main.appendChild(feels);
      
      
   };
  
   function Ktoc(K){  
     return Math.floor(K - 273.15);  
   }  
   form.addEventListener('submit',(e) =>{  
    e.preventDefault();  
    const city = search.value;  
    if(city){  
      getWeatherByLocation(city)  
    }  
   });  