const projects = [
  {
    title: "Gold Price Prediction",
    description:
      "Machine learning project achieving 89% model accuracy using Python, Scikit-learn, Pandas, and data preprocessing.",
    tech: "Python • Scikit-learn • Pandas",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "AI Expense Tracker",
    description:
      "Built an AI-powered expense tracker using Claude API and prompt engineering.",
    tech: "Claude API • Kotlin • Prompt Engineering",
    github: "https://github.com/Vikrantdoke04/Expense_Tracker",
    demo: "#",
  },
  {
    title: "Distributed File System",
    description:
      "Developed a distributed system using Java with multithreading and file handling.",
    tech: "Java • HTML • CSS • JavaScript",
    github: "https://github.com/Vikrantdoke04/Distributed-file-system",
    demo: "#",
  },
  {
    title: "Bank Management System",
    description:
      "Java-based banking system using OOP principles and MySQL database integration.",
    tech: "Java • MySQL • OOP",
    github: "https://github.com/",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] p-8 rounded-2xl shadow-lg hover:scale-105 hover:border hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              <div className="text-sm text-cyan-400 font-semibold mb-6">
                {project.tech}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;