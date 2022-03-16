console.log("abut to fetch!!")

// document.querySelectore - for class and get element by id is for id's

// displaying city searched
var button = document.querySelector(".btn");
var input = document.querySelector(".form-control");
var cityName = document.querySelector(".city-name");
var temperature = document.querySelector(".Temperature");
var humidity = document.querySelector(".Humidity");
var windSpeed = document.querySelector(".Wind-Speed");
var uvIndex = document.querySelector(".UV-index");

button.addEventListener("click", function() {
    fetch("api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=736ee8bb24231192f3a1a9819cc1cb6e");
    // promise
        .then(response => response.json())
        .then(data => console.log(data))
    
        .catch(err => alert("Error"))
})



// api key
// const APIKey = "736ee8bb24231192f3a1a9819cc1cb6e";

// function getWeather(cityName) {
//     let queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + "city name" + "&appid=" + "APIKey";
//     console.log(cityName);
// }


// response

// complete data stream (grab the data stream from body of the response)

// make element with data