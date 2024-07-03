import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVisualstudiocode,
  SiNpm,
} from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">In-bio</h2>
            <p className="mb-4">
              Hello! I`m Robius Sani, a passionate frontend developer with a
              strong foundation in modern web technologies. I love creating
              dynamic and responsive web applications.
            </p>
            <a
              href="mailto:hafazrobiussani@gmail.com"
              className="text-blue-400 hover:underline flex items-center"
            >
              <FaEnvelope className="mr-2" /> hafazrobiussani@gmail.com
            </a>
            <div className="flex mt-4">
              <a
                href="https://www.linkedin.com/in/robius-sani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://x.com/RobiusS4690"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mr-4"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://github.com/Robiu-Sani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <FaHtml5 className="text-2xl text-orange-600" title="HTML" />
              <FaCss3Alt className="text-2xl text-blue-600" title="CSS" />
              <FaJs className="text-2xl text-yellow-500" title="JavaScript" />
              <FaReact className="text-2xl text-blue-500" title="React" />
              <SiNextdotjs className="text-2xl text-black" title="Next.js" />
              <SiTailwindcss
                className="text-2xl text-teal-500"
                title="TailwindCSS"
              />
              <SiFirebase
                className="text-2xl text-orange-500"
                title="Firebase"
              />
              <SiMongodb className="text-2xl text-green-500" title="MongoDB" />
              <SiExpress className="text-2xl text-black" title="Express.js" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-4">
              <SiVisualstudiocode
                className="text-2xl text-blue-500"
                title="VS Code"
              />
              <FaGitAlt className="text-2xl text-orange-600" title="Git" />
              <FaGithub className="text-2xl text-white" title="GitHub" />
              <SiNpm className="text-2xl text-red-600" title="npm" />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} In-bio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
