import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 mb-4">
          MY WORK
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Featured Projects
        </h2>

        <p className="text-gray-400 mb-16">
          Some projects I built using React,
          JavaScript and REST APIs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;