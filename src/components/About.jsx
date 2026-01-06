import RushilPic from "../imgs/Rushilpic.jpg";

function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={RushilPic}
          alt="Rushil Reddy"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />
        <div className="text-gray-700 space-y-4 text-base sm:text-lg">
          <p>
            I’m Rushil Reddy, a software developer with a passion for
            problem-solving and creating meaningful digital experiences.
            Originally from Hyderabad, India, I spent parts of my childhood in
            the USA and India, which gave me a global perspective and
            adaptability. I recently moved to Canada to pursue a Web Development
            program at Conestoga College, building on my programming foundation
            and preparing to create impactful projects in the tech industry.
          </p>
          <p>
            Prior to focusing on software development, I competed professionally
            in Rocket League for several years, representing India at
            international events. This experience taught me discipline,
            teamwork, strategic thinking, and how to perform under pressure —
            skills that I now bring to my development projects. I enjoy tackling
            complex challenges and continuously learning new technologies to
            deliver high-quality work.
          </p>
          <p>
            Outside of coding, I enjoy reading novels and comics, exploring
            anime art, and staying active through activities like snowboarding.
            These hobbies help me stay creative and energized, and I value
            collaboration and continuous growth in both my personal and
            professional life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
