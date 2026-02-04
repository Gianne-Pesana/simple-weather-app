import Image from "next/image"; // Import Image for cloud assets

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
    // Check for "cloud" specifically for animated clouds
    if (conditionStr.includes("cloud")) return "bg-clouds dark:bg-dark-clouds";
    if (conditionStr.includes("mist") || conditionStr.includes("fog"))
      return "bg-mist dark:bg-dark-mist";
    return "bg-clear dark:bg-dark-clear";
  };

  const isRain = condition?.toLowerCase().includes("rain");
  const isCloudy = condition?.toLowerCase().includes("cloud"); // New condition for clouds

  const cloudImages = [
    "/assets/cloud1.png",
    "/assets/cloud2.png",
    "/assets/cloud3.png",
  ];

  const generateClouds = (count: number) => {
    const clouds = [];
    for (let i = 0; i < count; i++) {
      const img = cloudImages[i % cloudImages.length]; // Cycle through provided images
      const size = Math.random() * 100 + 100; // Random size between 100px and 200px
      const top = Math.random() * 80; // Random top position
      const leftStart = Math.random() * 100; // Initial left position
      const animationDuration = Math.random() * 80 + 120; // Animation duration between 120s and 200s
      const animationDelay = Math.random() * -100; // Random negative delay to start at various points

      clouds.push(
        <Image
          key={i}
          src={img}
          alt="cloud"
          width={size}
          height={size * 0.7} // Maintain aspect ratio roughly
          className="absolute z-[1] opacity-70" // opacity for clouds
          style={{
            top: `${top}vh`,
            left: `${leftStart}vw`,
            animation: `cloud-move ${animationDuration}s linear infinite`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      );
    }
    return clouds;
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${getBgClass()} transition-all duration-500`} // Added overflow-hidden
    >
      {isRain && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-500"
          style={{ backgroundImage: "url('/assets/animated-rain2.gif')" }}
        ></div>
      )}

      {isCloudy && (
        <div className="absolute inset-0 z-[1]"> 
          {generateClouds(25)}
        </div>
      )}

      <div className="min-h-screen px-4 flex flex-col items-center justify-center bg-black/10 dark:bg-black/30 relative z-10">
        {children}
      </div>
    </div>
  );
}
