var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');




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
         var infoWeather = console.log(data.list[0].main,{
            method:'get'
         });
            var info = document.createElement('li')
           const textnode = document.createTextNode(infoWeather)
           info.appendChild(textnode);
           document.getElementById('display').appendChild(info);
       
            //   displayRepos(data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('error');
    });
};
 function displayRepos(){
 
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