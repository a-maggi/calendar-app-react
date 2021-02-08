const getWeather = (city) => {
  return fetch(`${process.env.REACT_APP_API_OPENWEATHER}?q=${city}&appid=${process.env.REACT_APP_KEY_OPENWEATHER}`)
    .then(async (res) => {
      let data = await res.json();
      return data;
    })
    .catch(async (err) => {
      console.error(`Fail in get the forecast weather.`, err)
      throw(err);
    });
}

export {
  getWeather
}
