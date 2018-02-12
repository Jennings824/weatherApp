const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?&appid=696ef0aff82789bd181e125f805ad65e'


export const fetchWeather = (lat,lon) => {
  const url = weatherURL+'&lat='+lat+'&lon='+lon+'&units=metric'
  console.log(url)

  return fetch(url)
    .then(response => response.json())
    .then(data => ({
      temp: data.main.temp,
      humidity: data.main.humidity
    }))
}
