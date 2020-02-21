const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");



const weather = {

    temperature: {
        value : 18,
        unit : "celsius"
    },

    description : "few clouds",
    iconId : "01d",
    city : "Nigeria",
    country : "GB"
};

function displayWeather(){

    iconElement.innerHTML = `<img src="img/${weather.iconId}.png" />`;
    tempElement.innerHTML = `${weather.temperature.value}`

    descElement.innerHTML = weather.description;

    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

}

function celsiusToFahrenheit(temperature) {

    return (temperature * 9/5)+32;

}

tempElement.addEventListener("mouseover", function(){

    if(weather.temperature.value === undefined) return;
    if(weather.temperature.unit === "celsius"){
        let fahrenheit = celsiusTofahrenheit(weather.temperature.value);

        fahrenheit = Math.floor(fahrenheit);
        tempElement.iinerHTML = `${fahrenheit}`;
        weather.temperature.unit = "fahrenheit";

    }else{
        tempElement.innerHTML = `${weather.temperature.value}`;
        weather.temperature.unit = "celsius";

    }
});


if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML = "This isn't supported";
}

function setPosition(position){  
    let latitude = position.coords.latitude;
    let longitude = position.coords.longtitude;
    getWaether(latitude, longtitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>${error.message}</p>";

}

document.getElementById("location") + window.location.href;
document.getElementById('date').innerHTML = Date()