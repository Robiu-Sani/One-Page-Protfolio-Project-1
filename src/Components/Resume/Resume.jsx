import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiGithub,
  SiGit,
  SiVisualstudiocode,
  SiNpm,
} from "react-icons/si";
import pdfResume from "/Robius_Sani_Resume.pdf";

const Resume = () => {
  return (
    <section>
      <div className="flex justify-center mt-6">
        <a
          download="Robius_Sani_Resume.pdf"
          className="px-5 p-2 rounded bg-blue-500 text-white hover:shadow-md"
          href={pdfResume}
        >
          {" "}
          Download
        </a>
      </div>
      <div
        className="w-[900px] border mx-auto bg-white p-6 shadow-lg rounded-lg mt-10"
        id="resume"
      >
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Robius Sani</h1>
          <p className="text-lg text-gray-600">Frontend React Developer</p>
        </header>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
            About Me
          </h2>
          <p className="text-gray-700 leading-7">
            I am a passionate and dedicated frontend React developer with a keen
            interest in building dynamic and responsive web applications. I have
            a strong foundation in HTML, CSS, and JavaScript, and I am
            proficient in modern frameworks and libraries such as React and
            Next.js. I am constantly learning and staying up-to-date with the
            latest technologies to deliver the best solutions to my clients. I
            am new to the field but highly motivated to contribute and grow
            professionally.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
            Contact Information
          </h2>
          <p className="flex items-center text-gray-700 mb-4">
            <FaEnvelope className="mr-2" /> Email:{" "}
            <a
              href="mailto:hafazrobiussani@gmail.com"
              className="text-blue-500 ml-2"
            >
              hafazrobiussani@gmail.com
            </a>
          </p>
          <p className="flex items-center text-gray-700 mb-4">
            <FaPhone className="mr-2" /> Phone:{" "}
            <a href="tel:+8801617688805" className="text-blue-500 ml-2">
              01617688805
            </a>
          </p>
          <p className="flex items-center text-gray-700 mb-4">
            <FaGithub className="mr-2" /> GitHub:{" "}
            <a
              href="https://github.com/Robiu-Sani"
              className="text-blue-500 ml-2"
            >
              github.com/Robiu-Sani
            </a>
          </p>
          <p className="flex items-center text-gray-700 mb-4">
            <FaLinkedin className="mr-2" /> LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/robius-sani/"
              className="text-blue-500 ml-2"
            >
              linkedin.com/in/robius-sani
            </a>
          </p>
          <p className="flex items-center text-gray-700 mb-4">
            <FaTwitter className="mr-2" /> Twitter:{" "}
            <a href="https://x.com/RobiusS4690" className="text-blue-500 ml-2">
              x.com/RobiusS4690
            </a>
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
            Skills
          </h2>
          <ul className="list-none grid grid-cols-2 pt-5 p-0">
            <li className="flex items-center mb-4">
              <SiHtml5 className="mr-2" /> HTML
            </li>
            <li className="flex items-center mb-4">
              <SiCss3 className="mr-2" /> CSS
            </li>
            <li className="flex items-center mb-4">
              <SiJavascript className="mr-2" /> JavaScript
            </li>
            <li className="flex items-center mb-4">
              <SiTailwindcss className="mr-2" /> Tailwind CSS
            </li>
            <li className="flex items-center mb-4">
              <SiReact className="mr-2" /> React
            </li>
            <li className="flex items-center mb-4">
              <SiNextdotjs className="mr-2" /> Next.js
            </li>
            <li className="flex items-center mb-4">
              <SiNodedotjs className="mr-2" /> Express.js
            </li>
            <li className="flex items-center mb-4">
              <SiNodedotjs className="mr-2" /> Node.js
            </li>
            <li className="flex items-center mb-4">
              <SiFirebase className="mr-2" /> Firebase
            </li>
            <li className="flex items-center mb-4">
              <SiMongodb className="mr-2" /> MongoDB
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
            Tools
          </h2>
          <ul className="list-none p-0">
            <li className="flex items-center mb-4">
              <SiGithub className="mr-2" /> GitHub
            </li>
            <li className="flex items-center mb-4">
              <SiGit className="mr-2" /> Git
            </li>
            <li className="flex items-center mb-4">
              <SiVisualstudiocode className="mr-2" /> VSCode
            </li>
            <li className="flex items-center mb-4">
              <SiNpm className="mr-2" /> npm
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Resume;
