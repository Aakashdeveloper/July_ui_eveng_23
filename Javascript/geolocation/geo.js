let x = document.getElementById('out');
let y = document.getElementById('cityName');

function Geolocation(){
   if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition)
   }else{
       x.innerText = "Geo Not Supported"
   }
}

const showPosition = (data) => {
    console.log(data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    x.innerText = `Latitude is ${latitude} and Longitude is ${longitude}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {

        y.innerText = `Your city is ${data.city.name}`
    })

}