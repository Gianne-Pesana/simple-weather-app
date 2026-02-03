import { Droplets, Wind, Thermometer, Sunrise, Sunset, Eye, Cloud } from "lucide-react";

export default function WeatherDetails({ weather }: { weather: any }) {
  // Convert Unix timestamp to human-readable time
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className="bg-black/10 dark:bg-white/10 backdrop-blur-md 
                    text-black dark:text-white rounded-xl p-6 
                    w-full max-w-md mt-6 grid grid-cols-2 gap-4 shadow-lg"
    >
      <DetailItem icon={<Droplets className="w-5 h-5" />} label="Humidity" value={`${weather.main.humidity}%`} />
      <DetailItem icon={<Wind className="w-5 h-5" />} label="Wind Speed" value={`${weather.wind.speed} m/s`} />
      <DetailItem icon={<Thermometer className="w-5 h-5" />} label="Pressure" value={`${weather.main.pressure} hPa`} />
      <DetailItem icon={<Cloud className="w-5 h-5" />} label="Cloudiness" value={`${weather.clouds.all}%`} />
      <DetailItem icon={<Eye className="w-5 h-5" />} label="Visibility" value={`${weather.visibility / 1000} km`} />
      <DetailItem icon={<Sunrise className="w-5 h-5" />} label="Sunrise" value={formatTime(weather.sys.sunrise)} />
      <DetailItem icon={<Sunset className="w-5 h-5" />} label="Sunset" value={formatTime(weather.sys.sunset)} />
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-sm opacity-80">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}
