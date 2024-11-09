import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8 mt-20">
          <div className="space-y-4 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800">
              🔧 Expert Java Software Engineer | Python Developer | Generative AI Enthusiast 🚀
            </h1>
            <p className="text-gray-600">
              As a dedicated Software Engineer with a focus on Java, I excel in crafting efficient, scalable, and robust software solutions...
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/image.jpg" alt="Profile Image" className="rounded-full w-80 h-80" />
            
            
          </div>
        </div>
      </div>
    </>
  );
}

