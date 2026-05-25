import React from "react";

const Experience = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Experience
        </h2>

        <div className="bg-[#111827] p-10 rounded-2xl shadow-lg">

          <h3 className="text-2xl font-bold text-cyan-300 mb-2">
            Data Science & Machine Learning Intern
          </h3>

          <p className="text-gray-400 mb-6">
            Maxgen Technologies Pvt. Ltd. | Dec 2024 – Jan 2025
          </p>

          <ul className="space-y-4 text-gray-300 leading-7">
            <li>
              • Performed data preprocessing, feature engineering, and model evaluation on real-world datasets.
            </li>

            <li>
              • Developed a Gold Price Prediction system using Machine Learning techniques.
            </li>

            <li>
              • Worked with Python, Pandas, Scikit-learn, and Jupyter Notebook.
            </li>

            <li>
              • Followed Agile-based workflows and debugging practices.
            </li>
          </ul>

        </div>

      </div>

    </section>
  );
};

export default Experience;