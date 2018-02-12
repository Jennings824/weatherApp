const weatherURL = 'http://samples.openweathermap.org/data/2.5/weather?&appid=52fd2138b55792cdba2eaa0a34874159'


export const fetchWeather = (lat,lon) => {
  const url = weatherURL+'&lat='+lat+'&lon='+lon
  console.log(url)

  return fetch(url)
    .then(response => response.json())
    .then(data => ({
      temp: data.main.temp,
      humidity: data.main.humidity
    }))
}
