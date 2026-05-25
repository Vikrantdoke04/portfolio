import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-14 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          <div className="bg-[#111827] p-6 rounded-2xl text-center hover:scale-105 transition">
            <FaJava className="text-5xl mx-auto text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold">Java</h3>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl text-center hover:scale-105 transition">
            <FaPython className="text-5xl mx-auto text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold">Python</h3>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl text-center hover:scale-105 transition">
            <FaReact className="text-5xl mx-auto text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold">React</h3>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl text-center hover:scale-105 transition">
            <FaHtml5 className="text-5xl mx-auto text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold">HTML</h3>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl text-center hover:scale-105 transition">
            <FaCss3Alt className="text-5xl mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">CSS</h3>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl text-center hover:scale-105 transition">
            <FaGitAlt className="text-5xl mx-auto text-red-500 mb-4" />
            <h3 className="text-lg font-semibold">Git</h3>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;