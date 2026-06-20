import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 mb-4">
          ABOUT ME
        </p>

        <h2 className="text-5xl font-bold mb-10">
          Building Digital Experiences
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-8">
              I'm Ram, a B.Tech graduate and MERN Stack
              Developer passionate about building modern,
              responsive, and scalable web applications.

              <br /><br />

              I enjoy solving real-world problems through
              software and continuously improving my
              development skills.

              <br /><br />

              My goal is to become a professional software
              engineer and build impactful products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="
glow-card
bg-zinc-900
rounded-2xl
p-6
border
border-cyan-500/20
hover:border-cyan-400
transition-all
duration-300
">
              <h3 className="text-4xl font-bold text-cyan-400">
                3+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects Built
              </p>
            </div>

            <div className="
glow-card
bg-zinc-900
rounded-2xl
p-6
border
border-cyan-500/20
hover:border-cyan-400
transition-all
duration-300
">
              <h3 className="text-4xl font-bold text-cyan-400">
                MERN
              </h3>
              <p className="text-gray-400 mt-2">
                Tech Stack
              </p>
            </div>

            <div className="
glow-card
bg-zinc-900
rounded-2xl
p-6
border
border-cyan-500/20
hover:border-cyan-400
transition-all
duration-300
">
              <h3 className="text-4xl font-bold text-cyan-400">
                2025
              </h3>
              <p className="text-gray-400 mt-2">
                Graduate
              </p>
            </div>

            <div className="
glow-card
bg-zinc-900
rounded-2xl
p-6
border
border-cyan-500/20
hover:border-cyan-400
transition-all
duration-300
">
              <h3 className="text-4xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-gray-400 mt-2">
                Learning Mindset
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;