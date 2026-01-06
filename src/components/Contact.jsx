import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Get in Touch
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Interested in collaborating or just want to say hi? Reach me via any of
        the platforms below, or send me an email directly.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:rushilreddy3@gmail.com"
          className="px-6 py-3 w-full sm:w-auto text-center bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300"
        >
          Email Me
        </a>
        <a
          href="https://github.com/Rushil-Y"
          target="_blank"
          className="px-6 py-3 w-full sm:w-auto text-center bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 hover:scale-105 transform transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rushil-reddy-2a0596321/"
          target="_blank"
          className="px-6 py-3 w-full sm:w-auto text-center bg-blue-800 text-white rounded-xl shadow-md hover:bg-blue-900 hover:scale-105 transform transition duration-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
