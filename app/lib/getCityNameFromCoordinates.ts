export async function getCityNameFromCoordinates(
  lat: number,
  lon: number
): Promise<{ name: string; lat: number; lon: number; country: string; state?: string } | null> {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
  if (!apiKey) {
    throw new Error("OpenWeather API key is not defined.");
  }

  const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    if (data && data.length > 0) {
      const cityData = data[0];
      return {
        name: cityData.name,
        lat: cityData.lat,
        lon: cityData.lon,
        country: cityData.country,
        state: cityData.state,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching city name from coordinates:", error);
    return null;
  }
}
