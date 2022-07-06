import './style.css'
import { backgrounds } from './backgrounds/layers'
import pointer from './backgrounds/sun'
let time = 'night';

document.body.style.background = backgrounds[time].gradient;
window.onload = function() {
    pointer.init();
    document.body.onmousemove =pointer.run;
  }
switch (time) {
    case 'night':

        const midground = document.createElement('div');
        midground.id = 'midground';
        const foreground = document.createElement('div');
        foreground.id = 'foreground';
        document.getElementById('pointer').innerText="🌔";
        document.body.appendChild(midground);
        document.body.appendChild(foreground);
        break;
}
