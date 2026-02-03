"use client";

import { useEffect, useState } from "react";
import SearchBar, { Suggestion } from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import BackgroundWrapper from "./components/BackgroundWrapper";
import ThemeToggle from "./components/ThemeToggle";

import { getWeather } from "./lib/getWeather";
import { saveCity, loadCity } from "./lib/cookies";

export default function Page() {
  const [weather, setWeather] = useState<any>(null);
  const [lastCity, setLastCity] = useState<Suggestion | null>(null);
  const [error, setError] = useState<string | null>(null);

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
    try {
      const data = await getWeather(suggestion.lat, suggestion.lon);
      if (data) {
        setWeather(data);
        saveCity(suggestion);
        setLastCity(suggestion);
      } else {
        setError(`Could not find weather for ${suggestion.name}.`);
      }
    } catch (err) {
      setError("Failed to fetch weather data. Please try again later.");
    }
  }

  return (
    <BackgroundWrapper condition={weather?.weather?.[0]?.main}>
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Weather App by Gianne</h1>
      </div>

      <SearchBar onSearch={search} defaultValue={lastCity?.name || ""} />
      {error && (
        <div className="mt-4 p-4 rounded-md bg-red-500/50 text-white text-center">
          {error}
        </div>
      )}
      {weather && <WeatherCard weather={weather} />}
    </BackgroundWrapper>
  );
}
