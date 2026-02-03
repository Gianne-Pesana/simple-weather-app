export async function getWeather(lat: number, lon: number) {
  const key = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
  );

  console.log("Request: ",`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)

  if (!res.ok) return null;
  
  const data = await res.json();
  // The 2.5 Weather API returns a structure that is more compatible.
  return {
    ...data,
    weather: data.weather,
    main: data.main,
    name: data.name,
  };
}