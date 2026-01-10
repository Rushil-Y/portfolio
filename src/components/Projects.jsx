function Projects() {
  const projects = [
    {
      title: "EText Manager (MERN Stack)",
      description:
        "A full-stack eTextbook manager built with MongoDB, Express, React, and Node.js. Users can browse, donate, and track reading progress.",
      github: "https://github.com/yourusername/etext-manager",
      live: "#",
    },
    {
      title: "Tip Calculator App",
      description:
        "A lightweight JavaScript app to calculate tips and split bills among friends.",
      github: "https://github.com/yourusername/tip-calculator",
      live: "#",
    },
    {
      title: "Pig game App",
      description:
        "Pig Game is a turn-based dice game where players roll to score points or hold to avoid losing their turn. The first player to reach the winning score wins.",
      github: "https://github.com/Rushil-Y/Pigapp",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-700 text-sm sm:text-base">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
