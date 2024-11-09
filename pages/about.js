import React from "react";
import Navbar from "./../components/Navbar";
import "../src/app/globals.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto mt-6 text-gray-600 space-y-4">
          <p>
            As a dedicated Software Engineer with a strong foundation in Java, I
            bring a deep technical expertise to every project. My work
            emphasizes creating efficient, scalable, and robust solutions that
            address real-world challenges.
          </p>
          <p>
            My skill set extends to Python, where I specialize in advanced data
            structures and problem-solving techniques. Currently, I am expanding
            my knowledge in the field of Generative AI through an intensive
            program at GIAC, developing innovative solutions that drive value in
            dynamic environments.
          </p>
          <p>
            I’m passionate about continuous learning and collaborating with
            forward-thinking teams to create impactful projects. I look forward
            to connecting and discussing how my expertise can contribute to
            ambitious projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
