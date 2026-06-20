import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 mb-4">
          MY STACK
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl">
          Technologies I use to build modern,
          scalable and responsive web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;