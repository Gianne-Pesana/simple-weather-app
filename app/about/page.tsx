import Link from 'next/link';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'; // Assuming react-icons is installed, if not, user needs to install.

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col items-center justify-center space-y-8 mt-8"> {/* Adjusted margin-top for header */}
        {/* About Container */}
        <div className="max-w-3xl w-full bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h1 className="text-center text-4xl font-bold mb-4">About Our Weather App</h1>
          <p className="text-lg leading-relaxed mb-4">
            This weather application is designed to provide users with quick, accurate, and easy-to-understand weather forecasts.
            We aim to empower individuals with the information they need to plan their day, travel, and activities without being caught off guard by changing weather conditions.
          </p>
          <p className="text-lg leading-relaxed">
            Built with modern web technologies, our app emphasizes user experience, performance, and accessibility. We believe that everyone deserves
            access to reliable weather data presented in an intuitive and aesthetically pleasing manner.
          </p>
        </div>

        {/* Contact Container */}
        <div className="max-w-3xl w-full bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="mb-6 text-lg">
            We'd love to hear from you! Connect with us through our social channels.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200">
              <FaFacebook className="w-10 h-10" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200">
              <FaLinkedinIn className="w-10 h-10" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
