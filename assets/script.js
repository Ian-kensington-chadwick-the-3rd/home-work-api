var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var data = this


var formSubmitHandler = function (event) {
  event.preventDefault();

  var city = nameInputEl.value.trim();
   
  if (city) {
    getUserRepos(city);

   
    nameInputEl.value = '';
  } else {
    alert('Please enter a City name');
  }
};

// var buttonClickHandler = function (event) {
//   var language = event.target.getAttribute('data-language');

//   if (language) {
//     getFeaturedRepos(language);

//     repoContainerEl.textContent = '';
//   }
// };

var getUserRepos = function (city) {
 
  var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=de7a2c93ef7ff607a0e6abf6ee0aa990&';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(displayWeatherTemp(data)) 
          console.log(displayWeatherDate(data))
          
          
          
          
          // console.log(data)
        
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
 
function displayWeatherTemp(data){
  var infoWeather = (data.list[0].main.temp);
  var infoWeatherDate =(data.list[0].dt_txt)
  console.log(data)
  var infoDate = document.createElement('li');
  var info = document.createElement('li');
  info.innerText = infoWeather.temp
  infoDate.innerText = infoWeatherDate
  document.getElementById('display').appendChild(info);
  document.getElementById('display').appendChild(infoDate);
}

function displayWeatherDate(data){
  var infoWeather = (data.list[0].dt_txt);
  console.log(data)
  var info = document.createElement('li');
  info.innerText = infoWeather
  document.getElementById('display').appendChild(info);
}

function displayWeatherName(data){
  var infoWeather = (data.list[0].main);
  console.log(data)
  var info = document.createElement('li');
  info.innerText = infoWeather;
  info.innerText = infoWeather.temp
  document.getElementById('display').appendChild(info);
}
















userFormEl.addEventListener('submit', formSubmitHandler);








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