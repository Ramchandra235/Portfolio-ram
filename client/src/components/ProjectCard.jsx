import { motion } from "framer-motion";

function ProjectCard({
  title,
  image,
  description,
  tech,
  github,
  demo,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        glow-card
        bg-zinc-900
        border
        border-cyan-500/20
        rounded-3xl
        overflow-hidden
        hover:border-cyan-400
        hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(0,245,255,0.25)]
        transition-all
        duration-300
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-56
            object-cover
            transition-all
            duration-700
            hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 leading-7">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="
                px-3
                py-1
                rounded-full
                bg-cyan-500/10
                text-cyan-400
                text-sm
                border
                border-cyan-500/20
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              text-center
              px-4
              py-3
              border
              border-cyan-500
              rounded-xl
              hover:bg-cyan-500
              hover:text-black
              transition-all
              duration-300
            "
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              text-center
              px-4
              py-3
              bg-cyan-500
              text-black
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;