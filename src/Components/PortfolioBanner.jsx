import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import profilePic from "../image/profile.png";

const PortfolioBanner = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex h-full flex-col md:flex-row items-center mt-20 py-20 bg-gradient-to-r from-blue-500 to-teal-500 p-10 rounded-lg shadow-lg">
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-3xl font-bold mb-4">Hi! It`s</h1>
          <h1 className="text-5xl font-bold mb-4">Robius Sani</h1>
          <p className="text-2xl mb-4">Frontend React Developer</p>
          <p className="text-lg mb-4">
            Passionate frontend developer specializing in React. Dedicated to
            creating responsive, user-friendly web applications with modern
            technologies.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <FaHtml5 className="text-orange-600 text-3xl" />
            <FaCss3Alt className="text-blue-600 text-3xl" />
            <FaJs className="text-yellow-500 text-3xl" />
            <FaReact className="text-teal-500 text-3xl" />
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/Robiu-Sani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-300 text-3xl hover:text-white transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/robius-sani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-300 text-3xl hover:text-white transition duration-300" />
            </a>
            <a
              href="https://x.com/RobiusS4690"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-300 text-3xl hover:text-white transition duration-300" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2   mt-10 md:mt-0">
          <img
            src={profilePic}
            alt="Robius Sani"
            className="rounded-full w-48 h-48 mx-auto md:mx-0 border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
