import React from "react";
import Image from "../../assets/3d.jpg";
import Image1 from "../../assets/img1.webp";

import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";

const Signup = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center ">
      <div className="sm:w-full max-w-5xl  md:h-[80%] grid grid-cols-2 sm:grid-cols-1 bg-white rounded-lg shadow-2xl overflow-hidden w-[60%] h-[90%]">
        <div className="relative sm:hidden">
          <img
            src={Image}
            alt="Signup Illustration"
            className="w-full h-full object-cover p-2 rounded-2xl"
          />
          <div className="absolute z-20 w-1/2 top-[85%] p-3 left-[40%] space-x-3">
            {/* Dots */}
            {[Image1, 2, 3, 4].map((i) => (
              <button
                key={i}
                aria-label={`slide-${i}`}
                className={`rounded-full p-1 ${
                  i === 1 ? "bg-violet-800" : "bg-white"
                } `}></button>
            ))}
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default Signup;
