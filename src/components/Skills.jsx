import React from "react";

function Skills() {
  const skills = [
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Git & GitHub", level: "Advanced" },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 bg-white"
          >
            <h3 className="font-semibold text-lg sm:text-xl mb-1">
              {skill.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
