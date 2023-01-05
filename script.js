let now=new Date();

let h2=document.querySelector("h2");

let date=now.getDate();
let hours=now.getHours();
let minutes=now.getMinutes();
let year= now.getFullYear();

if (hours<10){
    hours=`0${hours}`;
}
if (minutes<10) {
    minutes=`0${minutes}`;
}

let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
let day= days[now.getDay()];

let months= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Now","Dec"];
let month=months [now.getMonth()];

h2.innerHTML= `${day} ${month} ${date}, ${hours}:${minutes} ${year}`;




function showTemp(response) {
 console.log(response.data);
 document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
 document.querySelector("#humidity-value").innerHTML=`Humidity: ${Math.round(response.data.main.humidity)}%`;
 document.querySelector("#wind-value").innerHTML= `Wind: ${Math.round(response.data.wind.speed)}km/h`;
 document.querySelector("#description-input").innerHTML= response.data.weather[0].description;
 document.querySelector("#city").innerHTML=response.data.name;
}

function searchCity(city){
let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event){
event.preventDefault();
let city = document.querySelector("#typeCity").value;
searchCity(city);
}

function searchLocation(position){
let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemp);
}

function getCurrentLocation(event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(searchLocation);

}

let form = document.querySelector("#search-form2");
form.addEventListener("submit", handleSubmit);

let currentLocationButton=document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");




