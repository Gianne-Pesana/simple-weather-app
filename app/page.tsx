"use client";

import { useEffect, useState } from "react";
import SearchBar, { Suggestion } from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails"; // Import new component
import BackgroundWrapper from "./components/BackgroundWrapper"; // Import BackgroundWrapper
import { MapPin, Loader } from "lucide-react"; // Import MapPin and Loader icons

import { getWeather } from "./lib/getWeather";
import { saveCity, loadCity } from "./lib/cookies";
import { getCityNameFromCoordinates } from "./lib/getCityNameFromCoordinates"; // Import the new utility

export default function Page() {
  const [weather, setWeather] = useState<any>(null);
  const [lastCity, setLastCity] = useState<Suggestion | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // New loading state for weather search
  const [locationLoading, setLocationLoading] = useState<boolean>(false); // New loading state for geolocation

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

  const handleGeolocation = () => {
    setError(null);
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const citySuggestion = await getCityNameFromCoordinates(latitude, longitude);
          if (citySuggestion) {
            search(citySuggestion);
          } else {
            setError("Could not determine city from your location.");
          }
          setLocationLoading(false);
        },
        (geoError) => {
          let errorMessage = "Unable to retrieve your location.";
          if (geoError.code === geoError.PERMISSION_DENIED) {
            errorMessage = "Location access denied. Please enable location services in your browser settings.";
          } else if (geoError.code === geoError.POSITION_UNAVAILABLE) {
            errorMessage = "Location information is unavailable.";
          } else if (geoError.code === geoError.TIMEOUT) {
            errorMessage = "The request to get user location timed out.";
          }
          setError(errorMessage);
          setLocationLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLocationLoading(false);
    }
  };

  return (
    <BackgroundWrapper condition={weather?.weather?.[0]?.main}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 max-w-screen-lg mx-auto pt-24">
        <SearchBar onSearch={search} defaultValue={lastCity?.name || ""} />

        <button
          onClick={handleGeolocation}
          disabled={locationLoading}
          className="flex items-center space-x-2 px-4 py-2 rounded-md bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition disabled:opacity-50 disabled:cursor-not-allowed text-black dark:text-white"
        >
          {locationLoading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <MapPin className="w-5 h-5" />
          )}
          <span>Use My Location</span>
        </button>

        {loading && (
          <div className="flex items-center justify-center p-6 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-xl text-black dark:text-white shadow-lg">
            <Loader className="w-8 h-8 animate-spin mr-2 text-current" />
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
            Search for a city or use your location to see the weather.
          </p>
        )}
      </div>
    </BackgroundWrapper>
  );
}