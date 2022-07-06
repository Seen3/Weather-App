import './style.css';
import { backgrounds } from './backgrounds/layers';
import createClouds from './backgrounds/clouds';
import pointer from './backgrounds/sun';
import causeRain from './backgrounds/rain';

let time = 'night';
let clouds = 4;
let rain = false;
document.body.style.background = backgrounds[time].gradient;
try {
  window.onload = function () {
    if (time == 'night' || time == 'evening')
      pointer.init("🌖");
    else
      pointer.init('☀')
    document.body.onmousemove = pointer.run;
  }
} catch (error) {

}

switch (time) {
  case 'night':
    const midground = document.createElement('div');
    midground.id = 'midground';
    const foreground = document.createElement('div');
    foreground.id = 'foreground';
    document.body.appendChild(midground);
    document.body.appendChild(foreground);
    break;
  case 'evening':
    break;
}
let Clouds = createClouds(clouds);
if (rain)
{
  causeRain();
}
document.body.appendChild(Clouds);

//now the ui






