import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
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

export default function Skills() {
  return (
    <section className="bg-gray-100 py-8" id="Skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaHtml5 className="text-4xl text-orange-600" />,
                name: "HTML",
              },
              {
                icon: <FaCss3Alt className="text-4xl text-blue-600" />,
                name: "CSS",
              },
              {
                icon: <FaJs className="text-4xl text-yellow-500" />,
                name: "JavaScript",
              },
              {
                icon: <FaReact className="text-4xl text-blue-500" />,
                name: "React",
              },
              {
                icon: <SiNextdotjs className="text-4xl text-black" />,
                name: "Next.js",
              },
              {
                icon: <SiTailwindcss className="text-4xl text-teal-500" />,
                name: "TailwindCSS",
              },
              {
                icon: <SiFirebase className="text-4xl text-orange-500" />,
                name: "Firebase",
              },
              {
                icon: <SiMongodb className="text-4xl text-green-500" />,
                name: "MongoDB",
              },
              {
                icon: <SiExpress className="text-4xl text-black" />,
                name: "Express.js",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                {skill.icon}
                <span className="mt-2 text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <SiVisualstudiocode className="text-4xl text-blue-500" />,
                name: "VS Code",
              },
              {
                icon: <FaGitAlt className="text-4xl text-orange-600" />,
                name: "Git",
              },
              {
                icon: <FaGithub className="text-4xl text-black" />,
                name: "GitHub",
              },
              {
                icon: <SiNpm className="text-4xl text-red-600" />,
                name: "npm",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                {tool.icon}
                <span className="mt-2 text-lg font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Problem-solving", "Teamwork", "Communication"].map(
              (skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                >
                  <span className="mt-2 text-lg font-medium">{skill}</span>
                </div>
              )
            )}
          </div>
        </div> */}
      </div>
    </section>
  );
}
