import Image from "next/image";

export default function WeatherCard({ weather }: { weather: any }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div
      className="bg-black/10 dark:bg-white/10 backdrop-blur-md 
                    text-black dark:text-white rounded-xl p-6 
                    h-full text-center shadow-lg"
    >
      <h2 className="text-3xl font-semibold">{weather.name}</h2>

      <div className="flex justify-center items-center my-4">
        <Image
          src={iconUrl}
          alt={weather.weather[0].description}
          width={100}
          height={100}
          className="drop-shadow-md"
        />
        <p className="text-xl capitalize font-medium">
          {weather.weather[0].main}
        </p>
      </div>

      <p className="text-6xl font-bold">
        {Math.round(weather.main.temp)}°C
      </p>
      <p className="text-lg opacity-80 mt-1">
        Feels like: {Math.round(weather.main.feels_like)}°C
      </p>
    </div>
  );
}
