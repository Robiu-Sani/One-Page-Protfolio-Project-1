import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      image: "https://i.ibb.co/r2BRFWz/Screenshot-613.png",
      githubRepo: "https://github.com/Robiu-Sani/Haven-Ease-project-9",
      liveLink: "https://spiffy-pie-b672f0.netlify.app/",
      description:
        "Spacious Modern Apartment in Prime Urban Location with Top Amenities and Stylish Interiors",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Daisy UI",
        "MongoDB",
        "Express.js",
        "Firebase",
      ],
    },
    {
      image: "https://i.ibb.co/KN1cZK6/p2.png",
      githubRepo: "https://github.com/Robiu-Sani/Luxtower-project-12",
      liveLink: "https://fluffy-gaufre-5d80b4.netlify.app/",
      description:
        "This website provides a comprehensive solution for managing a single building, making it easier for users, members, and administrators to handle all aspects of building management efficiently.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Daisy UI",
        "MongoDB",
        "Express.js",
        "Firebase",
      ],
    },
    {
      image: "https://i.ibb.co/J2pRJm3/p3.png",
      githubRepo: "https://github.com/Robiu-Sani/Tutor-Nest-project-11",
      liveLink: "https://amazing-concha-2bff67.netlify.app/",
      description:
        "Tutor Nest is dedicated to providing top-notch education services tailored to your needs.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Daisy UI",
        "MongoDB",
        "Express.js",
        "Firebase",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-8" id="Projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between shadow-md rounded-lg p-6"
            >
              <img
                src={project.image}
                className="w-full h-[150px] rounded-md"
              />
              <small className=" mb-4">{project.description}</small>
              <h4 className="font-bold mb-2">Technologies Used:</h4>
              <ul className="list-disc grid grid-cols-2 list-inside mb-4">
                {project.technologies.map((tech, idx) => (
                  <li className="text-sm" key={idx}>
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href={project.githubRepo}
                  className="text-blue-500 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub Repo
                </a>
                <a
                  href={project.liveLink}
                  className="text-blue-500 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
