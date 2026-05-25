import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Vikrant <span className="text-cyan-400">Doke</span>
          </h1>

                <TypeAnimation
        sequence={[
            "Software Developer",
            2000,
            "Java Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Machine Learning Learner",
            2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl md:text-3xl text-cyan-400 font-semibold"
        />

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Final Year IT student passionate about Java development,
            Machine Learning, AI-powered applications, and modern web
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">

            <a
            href="#projects"
            className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
            View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl">

            <a
              href="https://github.com/Vikrantdoke04"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/vikrant-doke-136125279"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 absolute"></div>

         <div className="relative">
  
            <img
                src="/profile.png"
                alt="Vikrant"
                className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />

            </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;