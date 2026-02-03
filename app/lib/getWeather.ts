export async function getWeather(lat: number, lon: number) {
  const key = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${key}`
  );

  if (!res.ok) return null;
  
  const data = await res.json();
  // The One Call API returns a different structure. 
  // The current weather is in the `current` property.
  // To maintain compatibility with the existing WeatherCard, we can return a synthesized object
  // that looks like the previous /weather endpoint response.
  return {
    ...data,
    weather: [data.current.weather[0]],
    main: data.current,
    name: data.timezone.split('/')[1].replace('_', ' '),
  };
}