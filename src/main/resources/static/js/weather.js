function getWeather(cityName) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Courchevel&appid=f98ce006994a8beedcf350d4251b749f", function (response) {
        console.log(response.main.temp - 273.15);
        console.log(response.wind.speed);
        console.log(response.main.humidity);
    });
}