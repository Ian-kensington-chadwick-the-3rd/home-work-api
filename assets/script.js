fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=93f82ae58c45de5e77c345bebf997588")
.then(data => data.json())
.then(weatherData => console.log(weatherData) );


