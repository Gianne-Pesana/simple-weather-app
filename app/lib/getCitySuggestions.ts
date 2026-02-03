export async function getCitySuggestions(query: string) {
  const key = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
  if (!query || !key) return [];

  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${key}`
  );

  if (!res.ok) return [];
  return res.json();
}
