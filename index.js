import { useState } from "react";
import { motion } from "framer-motion";

export default function InternshipCard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="relative flex flex-col justify-between items-center w-80 h-52 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-5 rounded-lg shadow-lg cursor-pointer"
        initial={{ rotate: 45 }}
        animate={isClicked ? { rotate: 0 } : { rotate: 45 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* Internship Details */}
        <div className="text-center">
          <h2 className="text-lg font-bold">Frontend Developer</h2>
          <p className="text-sm">XYZ Inc. | Remote</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setIsClicked(true)}
            className="bg-white text-blue-500 px-4 py-2 rounded-md font-bold"
          >
            Know More
          </button>
          <button
            onClick={() => setIsClicked(true)}
            className="bg-white text-green-500 px-4 py-2 rounded-md font-bold"
          >
            Apply Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
