import React from 'react'
import Navbar from "./../components/Navbar";
import "../src/app/globals.css";


const projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Projects</h2>
        <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example project cards */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Project One</h3>
            <p className="text-gray-600 mt-2">
              A detailed project on web application development that involved building a scalable architecture with Java and Next.js.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Project Two</h3>
            <p className="text-gray-600 mt-2">
              An AI-driven solution that leverages machine learning algorithms to enhance data analysis processes.
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </>
  )
}

export default projects