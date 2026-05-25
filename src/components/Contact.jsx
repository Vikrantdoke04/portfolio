import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#0f172a] text-white py-24 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          Feel free to connect with me for internships, projects, or software development opportunities.
        </p>

        <div className="space-y-4 text-lg">

          <p>
            📧 Email: 
            <span className="text-cyan-400 ml-2">
              vikrantdoke04@gmail.com
            </span>
          </p>

          <p>
            📱 Phone:
            <span className="text-cyan-400 ml-2">
              +91 7058431057
            </span>
          </p>

          <p>
            📍 Location:
            <span className="text-cyan-400 ml-2">
              Pune, Maharashtra
            </span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default Contact;