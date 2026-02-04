import Link from 'next/link';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'; // Assuming react-icons is installed, if not, user needs to install.
import BackgroundWrapper from '../components/BackgroundWrapper'; // Import BackgroundWrapper

export default function AboutPage() {
  return (
    <BackgroundWrapper condition="clear">
      {" "}
      {/* Wrap with BackgroundWrapper and set default condition */}
      <div className="container mx-auto p-4 md:p-8 text-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center justify-center space-y-8 mt-24">
          {" "}
          {/* Adjusted margin-top for header */}
          {/* About Container */}
          <div className="max-w-3xl w-full bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h1 className="text-center text-4xl font-bold mb-4">
              About the App
            </h1>
            <p className="text-lg leading-relaxed mb-4">
              This is a simple weather application built with Next.js, created
              as part of an Applications Development project. The main goal of
              the app is to explore how Next.js works in practice, particularly
              its approach to component-based design, routing, and modern
              frontend development.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              In addition to the UI, the project also serves as a hands-on
              exercise in basic backend concepts, such as fetching and handling
              data from external APIs. Through this app, I experimented with API
              integration, data handling, and rendering dynamic content based on
              real-time information.
            </p>
            <p className="text-lg leading-relaxed">
              Overall, this project is primarily for learning purposes—helping
              me become more familiar with designing applications in Next.js
              while gaining practical experience in connecting frontend
              interfaces with external data sources.
            </p>
          </div>
          {/* Contact Container */}
          <div className="max-w-3xl w-full bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Gianne Carl S. Pesaña
            </h2>
            <p className="mb-6 text-lg">
              I'd love to hear from you! Connect with me through my social
              channels.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://www.facebook.com/tl3.gianne.pesana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
              >
                <FaFacebook className="w-10 h-10" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <FaLinkedinIn className="w-10 h-10" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
