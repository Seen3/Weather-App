import './style.css';
import { backgrounds } from './backgrounds/layers';
import createClouds from './backgrounds/clouds';
import pointer from './backgrounds/sun';
import causeRain from './backgrounds/rain';
import detailsBox from './details';

let time = 'night';
let clouds = 4;
let rain = false;

let date = new Date();
let hours = date.getUTCHours();
if (hours >= 6 && hours < 10)
  time = "morning";
else if (hours >= 10 && hours < 17)
  time = "noon";
else if (hours >= 17 && hours < 21)
  time = 'evening';
else
  time = 'night';


document.body.style.background = backgrounds[time].gradient;


let Clouds = createClouds(clouds);
Clouds.style.position = 'absolute';
Clouds.style.top = "1vh";
if (rain) {
  causeRain();
}
document.body.appendChild(Clouds);

//now the ui

const mainBox = document.createElement('div');
mainBox.classList.add('mainUIBox');
const input = document.createElement('input');
input.focus();
input.placeholder = "Enter City Name";
const but = document.createElement('button');
but.classList.add('glow-on-hover');
mainBox.appendChild(input);
mainBox.appendChild(but);
but.innerText = "Search";
but.addEventListener('click', async () => {
  let city = input.value;
  console.log(city);
  let res;
  let weatherData;
  try {
    res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cb1bab1fa8545d676c9ea3818b0b35c2`, { mode: 'cors' });
    if (res.status!==200)
    {
      alert("Error: Invalid Location");
    }
    weatherData = await res.json();
  } catch (error) {
   
  }
  //clouds
  let clouds = Math.floor((weatherData.clouds.all) / 100 * 5);
  let cloudBox = document.querySelector('#cloudbox');
  cloudBox.remove();
  let Clouds = createClouds(clouds);
  Clouds.style.position = 'absolute';
  Clouds.style.top = "1vh";
  document.body.appendChild(Clouds);
  //Rain
  if (weatherData.weather[0].main == 'Thunderstorm' || weatherData.weather[0].main == 'Drizzle' || weatherData.weather[0].main == 'Rain') {
    causeRain();
  }
  else {
    let elements = document.querySelectorAll("HR");
    elements.forEach(element => {
      element.remove();
    });
  }

  //Day n nite

  let date = new Date();
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();
  let currentTime = (hours * 3600) + (minutes * 60) + seconds + weatherData.timezone;
  hours = Math.floor(currentTime / 3600);
  if (hours >= 6 && hours < 10)
    time = "morning";
  else if (hours >= 10 && hours < 17)
    time = "noon";
  else if (hours >= 17 && hours < 21)
    time = 'evening';
  else
    time = 'night';
  document.body.style.background = backgrounds[time].gradient;
  try {
    if (time == 'night' || time == 'evening')
      pointer.init("🌖");
    else
      pointer.init('☀')
    document.body.onmousemove = pointer.run;
  } catch (error) {

  }
  if (time=='night')
  {
    const midground = document.createElement('div');
    midground.id = 'midground';
    const foreground = document.createElement('div');
    foreground.id = 'foreground';
    document.body.appendChild(midground);
    document.body.appendChild(foreground);
  }
  let inp = document.querySelector('.mainUIBox');
  inp.remove();
  document.body.appendChild(detailsBox(weatherData));
  console.log(weatherData);

});
document.body.appendChild(mainBox);





