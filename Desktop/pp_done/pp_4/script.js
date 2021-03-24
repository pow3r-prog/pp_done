var appid = 'dd248616b9c538a5d8d575debddb41b3';

function YourWeather(reg) {
    var link = 'https://api.openweathermap.org/data/2.5/weather?q=' + reg + '&APPID=' + appid;
    var xhr = new XMLHttpRequest();

    var selectedRegion = document.getElementById('entreg');
    var weatherr = document.getElementById('weatherr')
    var weatIco = document.querySelector('.weaticon');
    var tempYoReg = document.getElementById('yoregtemp');
    var atmtsk = document.getElementById('atmtisk');
    var hum = document.getElementById('hum');
    var windSpeed = document.getElementById('windspeed');
    var cloud = document.getElementById('cloud')

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            selectedRegion.innerHTML = data.name;
            weatherr.innerHTML = data.weather[0].description;
            weatIco.setAttribute ('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
            tempYoReg.innerHTML = (data.main.temp - 273.15).toFixed(2);
            atmtsk.innerHTML = data.main.pressure;
            hum.innerHTML = data.main.humidity;
            windSpeed.innerHTML = data.wind.speed;
            cloud.innerHTML = data.clouds.all;
        }
    }
}
xhr.open('GET',link, true);
xhr.send()
}
var sendreg = document.getElementById("sendreg");

sendreg.addEventListener("click", function () {
    var reg = document.getElementById('reg').value;
    YourWeather(reg);
});

