function makeRequest() {
  var cityInput = document.getElementById("cityInput")
  var button = document.getElementById("button")
  var weatherText = document.getElementById("weatherText")
  var weatherDescription = document.getElementById("weatherDescription")
  var weatherHumidity = document.getElementById("weatherHumidity")
  var weatherTemperature = document.getElementById("weatherTemperature")
  var weatherImage = document.getElementById("weatherImage")

  var apiKey = "e9035ce975202caad4077db5d69047d4"
  var unexpectedImageLink = "data:image/png;base64,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"

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&APPID=" + apiKey, true);
  xhr.onload = function(e) {
    if(xhr.readyState == 4) {
      if(xhr.status == 200) {
        var data = JSON.parse(xhr.responseText)
        console.log(data)

        var newWeatherText = data.weather[0].main
        weatherText.innerHTML = newWeatherText
        var newWeatherDescription = data.weather[0].description
        weatherDescription.innerHTML = newWeatherDescription.charAt(0).toUpperCase() + newWeatherDescription.slice(1)
        weatherTemperature.innerHTML = "Temperature : " + (data.main.temp - 273.5).toFixed() + "°C"
        weatherHumidity.innerHTML = "Humidity : " + (data.main.humidity) + "%"

        var currentTime = new Date().getTime()
        var daytime = currentTime > data.sys.sunrise * 1000 && currentTime < data.sys.sunset * 1000
        console.log(daytime)
        // console.log(currentTime)
        // console.log(data.sys.sunrise * 1000)
        // console.log(data.sys.sunset * 1000)

        if (newWeatherText === "Clear") {
          if (daytime) {
            weatherImage.src = "../../assets/images/clear.png"
          } else {
              weatherImage.src = "../../assets/images/moon.png"
          }
        } else if (["Clouds", "Mist", "Haze"].includes(newWeatherText)) {
          weatherImage.src = "../../assets/images/clouds.png"
        } else if (["Rain", "Drizzle"].includes(newWeatherText)) {
          weatherImage.src = "../../assets/images/rain.png"
        } else {
          weatherImage.src = unexpectedImageLink
        }
      } else {
        console.error(xhr.statusText)
        // weatherText.innerHTML = oneLinerJoke.getRandomJoke()
        getJoke()
        weatherImage.src = unexpectedImageLink
      }
    }
  }
  xhr.oneerror = function(e) {
    console.error(xhr.statusText)
  }
  // ... execute the query : Lazy sent ?
  xhr.send(null)
}

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jumpstartjs-jver.herokuapp.com/joke");
  xhr.onload = function(e) {
    if(xhr.readyState == 4) {
      if(xhr.status == 200) {
      } else {
        console.error(xhr.statusText)
      }
    }
  }
  xhr.oneerror = function(e) {
    console.error(xhr.statusText)
  }
  // ... execute the query : Lazy sent ?
  return xhr.send(null)

}

window.onload = function() {
  // oneLinerJoke = require("one-liner-joke");

  button.addEventListener("click", makeRequest)
  cityInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) { // 13 is enter
      makeRequest()
    }
  })
}
