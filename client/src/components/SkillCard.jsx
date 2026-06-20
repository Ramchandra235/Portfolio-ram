import { motion } from "framer-motion";

function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="
        glow-card
        bg-zinc-900
        border
        border-cyan-500/20
        rounded-2xl
        p-6
        text-center
        hover:border-cyan-400
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <h3 className="font-semibold text-lg">
        {skill}
      </h3>
    </motion.div>
  );
}

export default SkillCard;