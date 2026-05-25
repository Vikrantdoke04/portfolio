import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#0f172a] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          About Me
        </h2>

        <div className="bg-[#111827] p-10 rounded-2xl shadow-lg">

          <p className="text-lg leading-8 text-gray-300">
            I am a Final Year Information Technology student passionate about
            software development, AI tools, machine learning, and web
            technologies.
          </p>

          <p className="text-lg leading-8 text-gray-300 mt-6">
            I enjoy building practical projects using Java, Python, React,
            Machine Learning, and AI-powered systems.
          </p>

        </div>

      </div>
    </motion.section>
  );
};

export default About;