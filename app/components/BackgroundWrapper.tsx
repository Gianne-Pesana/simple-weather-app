export default function BackgroundWrapper({
  condition,
  children,
}: {
  condition?: string;
  children: React.ReactNode;
}) {
  const getBgClass = () => {
    const conditionStr = condition?.toLowerCase() || "clear";
    if (conditionStr.includes("rain")) return "bg-rain dark:bg-dark-rain";
    if (conditionStr.includes("drizzle"))
      return "bg-drizzle dark:bg-dark-drizzle";
    if (conditionStr.includes("snow")) return "bg-snow dark:bg-dark-snow";
    if (conditionStr.includes("thunder"))
      return "bg-thunder dark:bg-dark-thunder";
    if (conditionStr.includes("cloud")) return "bg-clouds dark:bg-dark-clouds";
    if (conditionStr.includes("mist") || conditionStr.includes("fog"))
      return "bg-mist dark:bg-dark-mist";
    return "bg-clear dark:bg-dark-clear";
  };

  const isRain = condition?.toLowerCase().includes("rain");

  return (
    <div
      className={`min-h-screen relative ${getBgClass()} transition-all duration-500`}
    >
      {isRain && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-500"
          style={{ backgroundImage: "url('/assets/animated-rain2.gif')" }}
        ></div>
      )}
      <div className="min-h-screen px-4 flex flex-col items-center justify-center bg-black/10 dark:bg-black/30 relative z-10">
        {" "}
        {/* Added relative z-10 to ensure content is above GIF */}
        {children}
      </div>
    </div>
  );
}
