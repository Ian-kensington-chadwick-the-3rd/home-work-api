document.getElementById('container')


fetch("https://api.openweathermap.org/data/2.5/forecast?lat=10&lon=20&appid=de7a2c93ef7ff607a0e6abf6ee0aa990&")
.then(data => data)
.then(pm => console.log(pm));


function constructVisualizerPayload() {
    var res = pm.response.json();
    
    return {response: res};
}

pm.visualizer.set(template, constructVisualizerPayload());