const key = '2c8ce9b25a4cac71df34477d4e202971';

async function fetchweather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    );
    const data = await response.json();
    console.log(data);

    updatewe(data);
}

const cityel = document.querySelector(".foone");
const temp = document.querySelector(".tw");
const wind = document.querySelector(".fionon");
const hum = document.querySelector(".fitwon");
const vis = document.querySelector(".fithon");
const des = document.querySelector(".th");
const date = document.querySelector(".si");

function updatewe(data) {
    wind.textContent = `${data.wind.speed} km/h`;
    hum.textContent = `${data.main.humidity}%`;
    vis.textContent = `${data.visibility / 1000} km`;
    des.textContent = data.weather[0].description;
    cityel.textContent = data.name;
    temp.textContent = `${data.main.temp}°`;
    const cdate = new Date();
    date.textContent = cdate.toDateString();
}

let display = document.getElementById('cityy');
let btn = document.getElementById('searchh');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    const city = display.value; 
    fetchweather(city);

});
