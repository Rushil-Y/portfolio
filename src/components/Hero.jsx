function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 to-white"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm Rushil Reddy
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
        Software Developer | Full Stack Enthusiast
      </p>
      <button
        onClick={() => {
          const projects = document.getElementById("projects");
          if (projects) {
            projects.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        See My Work
      </button>
    </section>
  );
}

export default Hero;
