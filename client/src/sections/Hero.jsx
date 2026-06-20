import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.png";

function Hero() {
return ( <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 px-6">


  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.12),transparent_60%)]" />

  {/* Cyan Glow */}
  <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[180px] rounded-full top-10 left-10" />

  {/* Purple Glow */}
  <div className="absolute w-[350px] h-[350px] bg-purple-500/20 blur-[180px] rounded-full bottom-10 right-10" />

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-5xl text-center"
  >


    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
     
      className="flex justify-center mb-8"
    >
      <div
        className="
        p-1
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-purple-500
        to-cyan-400
        shadow-[0_0_40px_rgba(0,245,255,0.5)]
        "
      >
        <img
          src={profile}
          alt="Ram Chandra"
          className="
w-20
h-20
md:w-24
md:h-24
rounded-full
object-cover
border-4
border-[#050505]
"
        />
      </div>
    </motion.div>

    {/* Name */}
    <p className="text-gray-400 text-lg mb-2">
      Hi, I'm
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      <span className="text-cyan-400">
        Ram Chandra
      </span>
    </h1>

    {/* Role */}
    <p className="text-cyan-400 tracking-[4px] uppercase mb-6">
      Full Stack Developer • MERN Specialist
    </p>

    {/* Main Heading */}
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
      Building
      <span className="text-cyan-400">
        {" "}Websites & Web Apps{" "}
      </span>
      That Grow Businesses.
    </h2>

 
    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="#projects"
        className="
          px-8
          py-4
          rounded-xl
          bg-cyan-500
          text-black
          font-semibold
          hover:scale-105
          transition-all
          duration-300
        "
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="
          px-8
          py-4
          rounded-xl
          border
          border-cyan-400
          hover:bg-cyan-500/10
          transition-all
          duration-300
        "
      >
        Hire Me
      </a>

    </div>

   
    {/* Freelance Badge */}
    <div className=" inline-flex items-center gap-2  mt-8 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-8">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

      <span className="text-sm text-green-300">
        Available for Freelance & Full-Time Opportunities
      </span>
    </div>

    {/* Social Links */}
    <div className="flex justify-center gap-8 mt-10 text-3xl">

      <a
        href="https://github.com/Ramchandra23"
        target="_blank"
        rel="noreferrer"
        className="
          text-cyan-400
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/china-rama-chandra-reddy-mallidi"
        target="_blank"
        rel="noreferrer"
        className="
          text-cyan-400
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <FaLinkedin />
      </a>

    </div>

    {/* Scroll Indicator */}
    <div className="mt-16 text-gray-500 animate-bounce text-2xl">
      ↓
    </div>

  </motion.div>

</section>


);
}

export default Hero;
