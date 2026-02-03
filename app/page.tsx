"use client";

import { useEffect, useState } from "react";
import SearchBar, { Suggestion } from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails"; // Import new component
import BackgroundWrapper from "./components/BackgroundWrapper";
import ThemeToggle from "./components/ThemeToggle";
// Removed lucide-react import for testing

import { getWeather } from "./lib/getWeather";
import { saveCity, loadCity } from "./lib/cookies";

export default function Page() {
  const [weather, setWeather] = useState<any>(null);
  const [lastCity, setLastCity] = useState<Suggestion | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // New loading state

  useEffect(() => {
    const stored = loadCity();
    if (stored) {
      setLastCity(stored);
      search(stored);
    }
  }, []);

  async function search(suggestion: Suggestion) {
    setError(null);
    setWeather(null);
    setLoading(true); // Set loading to true
    try {
      const data = await getWeather(suggestion.lat, suggestion.lon);
      if (data) {
        setWeather(data);
        saveCity(suggestion);
        setLastCity(suggestion);
      } else {
        setError(`Could not find weather for ${suggestion.name}.`);
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch weather data. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false
    }
  }

  return (
    <BackgroundWrapper condition={weather?.weather?.[0]?.main}>
      <div className="absolute top-5 right-5 z-10">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 max-w-screen-lg mx-auto">
        <SearchBar onSearch={search} defaultValue={lastCity?.name || ""} />

        {loading && (
          <div className="flex items-center justify-center p-6 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-xl text-black dark:text-white shadow-lg">
            <svg className="w-8 h-8 animate-spin mr-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && !loading && (
          <div className="p-6 bg-red-500/50 text-white text-center rounded-xl shadow-lg">
            <p className="font-semibold text-lg">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && weather && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </div>
        )}

        {!loading && !weather && !error && (
            <p className="text-xl text-black dark:text-white opacity-70">
                Search for a city to see the weather.
            </p>
        )}
      </div>
    </BackgroundWrapper>
  );
}
