var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#cityName');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var data = this


var formSubmitHandler = function (event) {
  event.preventDefault();

  var city = nameInputEl.value.trim();
   console.log(city);
  if (city) {
    getUserRepos(city);
    grabWeatherApi(city);
   
    nameInputEl.value = '';
  } else {
    alert('Please enter a City name');
  }
};

var getUserRepos = function (city) {

  var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=de7a2c93ef7ff607a0e6abf6ee0aa990&units=imperial';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(displayForcastTemp1(data)) 
          console.log(displayForcastTemp2(data)) 
          console.log(displayForcastTemp3(data)) 
          console.log(displayForcastTemp4(data)) 
          console.log(displayForcastTemp5(data)) 
          console.log(data)
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('error');
    });
};

 
function grabWeatherApi(city){
  
  var apiUrl1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=de7a2c93ef7ff607a0e6abf6ee0aa990&'
  
  
  console.log(city)
  fetch(apiUrl1)
.then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // console.log(displayWeatherTemp1(data)) 
        // console.log(displayWeatherTemp2(data)) 
        // console.log(displayWeatherTemp3(data)) 
        // console.log(displayWeatherTemp4(data)) 
        // console.log(displayWeatherTemp5(data)) 
        console.log(data)
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('error');
  });
};
// var list = (data.list.main)
 function grabWeatherApi1(){
  var info
 }

 





function displayForcastTemp1(data){
  // making my main branch variables that my innerText will branch off from
  var infoWeather = (data.list[0]);
  var cityName = (data.city.name);
  // console logging data so that if all else goes wrong i can still see through my api tree dom
  
  // creating my 'li' elements to go in my ul
  var infoDate = document.getElementById('city1');
  var info = document.getElementById('temp1');
  var infoName =document.getElementById('date1');
  // using innerText to create the items I want from weather api
  info.innerText = infoWeather.main.temp;
  infoDate.innerText = infoWeather.dt_txt;
  infoName.innerText= cityName;
  // displaying my elements from the api
  document.getElementById('display1').appendChild(infoName);
  document.getElementById('display1').appendChild(info);
  document.getElementById('display1').appendChild(infoDate);
}
function displayForcastTemp2(data){
  // making my main branch variables that my innerText will branch off from
  var infoWeather = (data.list[8]);
  var cityName = (data.city.name);
  // console logging data so that if all else goes wrong i can still see through my api tree dom
  console.log(data);
  // creating my 'li' elements to go in my ul
  var infoDate = document.getElementById('city2');
  var info = document.getElementById('temp2');
  var infoName =document.getElementById('date2');
  // using innerText to create the items I want from weather api
  info.innerText = infoWeather.main.temp
  infoDate.innerText = infoWeather.dt_txt
  infoName.innerText= cityName
  // displaying my elements from the api
  document.getElementById('display2').appendChild(infoName);
  document.getElementById('display2').appendChild(info);
  document.getElementById('display2').appendChild(infoDate);
}
function displayForcastTemp3(data){
  // making my main branch variables that my innerText will branch off from
  var infoWeather = (data.list[16]);
  var cityName = (data.city.name);
  // console logging data so that if all else goes wrong i can still see through my api tree dom
  console.log(data);
  // creating my 'li' elements to go in my ul
  var infoDate = document.getElementById('city3');
  var info = document.getElementById('temp3');
  var infoName =document.getElementById('date3');
  // using innerText to create the items I want from weather api
  info.innerText = infoWeather.main.temp
  infoDate.innerText = infoWeather.dt_txt
  infoName.innerText= cityName
  // displaying my elements from the api
  document.getElementById('display3').appendChild(infoName);
  document.getElementById('display3').appendChild(info);
  document.getElementById('display3').appendChild(infoDate);
}
function displayForcastTemp4(data){
  // making my main branch variables that my innerText will branch off from
  var infoWeather = (data.list[24]);
  var cityName = (data.city.name);
  // console logging data so that if all else goes wrong i can still see through my api tree dom
  console.log(data);
  // creating my 'li' elements to go in my ul
  var infoDate = document.getElementById('city4');
  var info = document.getElementById('temp4');
  var infoName =document.getElementById('date4');
  // using innerText to create the items I want from weather api
  info.innerText = infoWeather.main.temp
  infoDate.innerText = infoWeather.dt_txt
  infoName.innerText= cityName
  // displaying my elements from the api
  document.getElementById('display4').appendChild(infoName);
  document.getElementById('display4').appendChild(info);
  document.getElementById('display4').appendChild(infoDate);
}
function displayForcastTemp5(data){
  // making my main branch variables that my innerText will branch off from
  var infoWeather = (data.list[32]);
  var cityName = (data.city.name);
  // console logging data so that if all else goes wrong i can still see through my api tree dom
  console.log(data);
  // creating my 'li' elements to go in my ul
  var infoDate = document.getElementById('city5');
  var info = document.getElementById('temp5');
  var infoName =document.getElementById('date5');
  // using innerText to create the items I want from weather api
  info.innerText = infoWeather.main.temp
  infoDate.innerText = infoWeather.dt_txt
  infoName.innerText= cityName
  // displaying my elements from the api
  document.getElementById('display5').appendChild(infoName);
  document.getElementById('display5').appendChild(info);
  document.getElementById('display5').appendChild(infoDate);
}


 



// save when click on search button and is a valid city
// persistant data 












userFormEl.addEventListener('submit', formSubmitHandler);






// var buttonClickHandler = function (event) {
//   var language = event.target.getAttribute('data-language');

//   if (language) {
//     getFeaturedRepos(language);

//     repoContainerEl.textContent = '';
//   }
// };


// languageButtonsEl.addEventListener('click', buttonClickHandler);

// fetch("https://api.openweathermap.org/data/2.5/forecast?q=Navarre&appid=de7a2c93ef7ff607a0e6abf6ee0aa990&", {
// method: 'post',
// body:{
//     body:JSON.stringify({name: 'user 1'
// })
   
    
// }})
// .then(function(response){

// })
// .then(data => console.log(data))
// .catch(error => console.log('error'));

// function output (){
//     addEventListener('click', ()=>{
//         document.getElementById('input')

//     })
    
// }



// var infoWeather = (data.list[0].main);
// console.log(data)
//    var info = document.createElement('li');
//  //  info.innerText = infoWeather;
//  info.innerText = infoWeather.temp;
//  document.getElementById('display').appendChild(info);

//    //   displayRepos(data, city);