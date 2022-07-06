function detailsBox(JSONresp) {
    const mainBox = document.createElement('div');
    mainBox.classList.add('details-box');
    const city = document.createElement('h1');
    city.innerText = JSONresp.name;
    mainBox.appendChild(city);
    city.style.fontSize="4em";
    const temp = document.createElement('div');
    temp.innerText = `Temperature: ${Math.round((JSONresp.main.temp - 273) * 100) / 100} °C`;
    mainBox.appendChild(temp);
    let weatherBox=document.createElement('div');
    let inner=document.createElement('div');
    inner.style.fontSize="2em";
    inner.innerText=JSONresp.weather[0].main;
    mainBox.appendChild(inner);
    let inner2=document.createElement('div');
    inner2.innerText=`Description: ${JSONresp.weather[0].description}`;
    inner2.style.textTransform="capitalize";
    mainBox.appendChild(inner2);
    let detailsBox=document.createElement('div');
    let humidity=document.createElement('div');
    humidity.innerText=`Humidity: ${JSONresp.main.humidity} %`;
    let pressure=document.createElement('div');
    pressure.innerText=`Pressure: ${JSONresp.main.pressure} hPa`;
    detailsBox.appendChild(humidity);
    detailsBox.appendChild(pressure);
    let reset=document.createElement('button');
    reset.innerText="OK";
    reset.addEventListener('click',()=>{
        window.location.reload();
    })
    
    mainBox.appendChild(detailsBox);
    mainBox.appendChild(weatherBox);
    reset.classList.add('glow-on-hover');
    mainBox.appendChild(reset);
    return mainBox;
}
export default detailsBox;