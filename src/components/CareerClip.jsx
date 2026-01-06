import React from "react";
import { Link } from "react-router-dom";

function CareerClip() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        A Dive Into My Rocket League Career
      </h1>

      <div className="w-full max-w-4xl mb-8">
        <video
          src="/videos/Rushilclip.mp4"
          controls
          className="w-full h-auto rounded-2xl shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300"
      >
        Back to Portfolio
      </Link>
    </section>
  );
}

export default CareerClip;
