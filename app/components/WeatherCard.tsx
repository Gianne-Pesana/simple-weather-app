import { Droplets, Wind } from "lucide-react";

export default function WeatherCard({ weather }: { weather: any }) {
  return (
    <div
      className="bg-black/10 dark:bg-white/10 backdrop-blur-md 
                    text-black dark:text-white rounded-xl p-6 
                    w-full max-w-md mt-6 text-center"
    >
      <h2 className="text-3xl font-semibold">{weather.name}</h2>

      <p className="text-lg capitalize opacity-80 mt-1">
        {weather.weather[0].description}
      </p>

      <p className="text-6xl font-bold mt-4">
        {Math.round(weather.main.temp)}°C
      </p>

      <div className="flex justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <Droplets className="w-5 h-5 stroke-black dark:stroke-white" />
          <span>{weather.main.humidity}%</span>
        </div>

        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 stroke-black dark:stroke-white" />
          <span>{weather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}
