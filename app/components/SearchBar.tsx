"use client";

import { useState, useEffect } from "react";
import { Search, Loader } from "lucide-react";
import { getCitySuggestions } from "../lib/getCitySuggestions";

// The parent component will now receive the full suggestion object
export interface Suggestion {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export default function SearchBar({
  onSearch,
  defaultValue,
}: {
  onSearch: (suggestion: Suggestion) => void;
  defaultValue?: string;
}) {
  const [city, setCity] = useState(defaultValue || "");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (city.length > 2) {
        setLoading(true);
        setError(null);
        try {
          const suggestions = await getCitySuggestions(city);
          setSuggestions(suggestions);
        } catch (err) {
          setError("Failed to fetch suggestions. Please try again later.");
          setSuggestions([]);
        } finally {
          setLoading(false);
        }
      } else {
        setSuggestions([]);
        setError(null);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [city]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!city.trim()) return;
    
    // Get suggestions and use the first one
    const suggestions = await getCitySuggestions(city);
    if (suggestions && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    } else {
      setError("Could not find that city.");
    }
  }

  function handleSuggestionClick(suggestion: Suggestion) {
    onSearch(suggestion);
    setCity(""); // Clear input after search
    setSuggestions([]);
  }

  return (
    <div className="w-full max-w-md relative">
      <form
        onSubmit={submit}
        className="w-full flex items-center gap-3"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city…"
            className="w-full px-4 py-2 rounded-md bg-black/10 dark:bg-white/10
                     text-black dark:text-white placeholder-gray-700 dark:placeholder-gray-300
                     outline-none backdrop-blur-md"
          />
          {loading && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Loader className="w-5 h-5 animate-spin" />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="p-2 rounded-md bg-black/10 dark:bg-white/10 hover:bg-black/20 
                     dark:hover:bg-white/20 transition"
        >
          <Search className="w-6 h-6 stroke-black dark:stroke-white" />
        </button>
      </form>

      {error && (
        <div className="absolute z-10 w-full mt-1 p-2 rounded-md bg-red-500/50 text-white text-center">
          {error}
        </div>
      )}

      {!error && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 rounded-md bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-white/30 dark:hover:bg-black/30 text-gray-800 dark:text-white"
            >
              {suggestion.name}, {suggestion.state && `${suggestion.state}, `}
              {suggestion.country}
            </li>
          ))}
        </ul>
      )}

      {!error && city.length > 2 && !loading && suggestions.length === 0 && (
        <div className="absolute z-10 w-full mt-1 p-2 rounded-md bg-white/20 dark:bg-black/20 backdrop-blur-md text-center">
          No results found.
        </div>
      )}
    </div>
  );
}
