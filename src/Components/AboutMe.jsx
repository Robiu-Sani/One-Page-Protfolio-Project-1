import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import profile from "/image/pic.webp";

export default function AboutMe() {
  return (
    <section className="bg-white py-8 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="w-full py-8 flex flex-col md:flex-row">
        <div className="w-full flex justify-center relative items-center p-10">
          <img src={profile} alt="image" className="rounded-md" />
          <div className="w-[calc(100%-120px)] h-[calc(100%-80px)] border-2 top-0 left-2 rounded-md absolute"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center  mb-8">
            <div className="w-full  flex items-start justify-center md:justify-start">
              <strong>Hello! I`m Robius Sani,</strong>
            </div>
            <p className="text-lg text-center md:text-left">
              a passionate frontend developer with a strong foundation in modern
              web technologies. I love creating dynamic and responsive web
              applications.
            </p>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Skills
            </h3>
            <div className="flex justify-center md:justify-start flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl text-orange-600" />
                <span className="mt-2">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-4xl text-blue-600" />
                <span className="mt-2">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-4xl text-yellow-500" />
                <span className="mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-blue-500" />
                <span className="mt-2">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-4xl text-black" />
                <span className="mt-2">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-4xl text-teal-500" />
                <span className="mt-2">TailwindCSS</span>
              </div>
              <div className="flex flex-col items-center">
                <SiFirebase className="text-4xl text-orange-500" />
                <span className="mt-2">Firebase</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl text-green-500" />
                <span className="mt-2">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-4xl text-black" />
                <span className="mt-2">Express.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
