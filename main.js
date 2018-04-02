
function getWeather(location) {
  const lat = location.lat;
  const lon = location.lon;
  const http = new XMLHttpRequest();
  http.open('GET', `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, true);
  // http.onreadystatechange = function() {
  //   if (http.readyState === 4 && http.status === 200) {
  //     console.log(JSON.parse(http.response));
  //   }
  // };
  http.onload = function() {
    const data = JSON.parse(http.response);
    const temprature = Math.round(data.main.temp);
    city.innerHTML = data.name;
    temp.innerHTML = `${temprature}*C`;
    wind.innerHTML = `${data.wind.speed} kmph`;
    logo.innerHTML = `<img alt="weather logo" src="${data.weather[0].icon}">`;
  };
  http.send();
}

function getLocation() {
  const position = navigator.geolocation.getCurrentPosition((position) => {
    const loc = {
      'lat': position.coords.latitude,
      'lon': position.coords.longitude
    };
    getWeather(loc);
    });
}

const city = document.getElementById('city');
const logo = document.getElementById('logo');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const descr = document.getElementById('descr');
