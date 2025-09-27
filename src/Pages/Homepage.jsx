import React from "react";
import Company from "../assets/company.jpg";
import Navigation from "../components/custom-components/Navigation";
const Homepage = () => {
  return (
    <section>
      <Navigation />
      <div className="grid grid-cols-3 gap-6 ">

        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
          <img
            src={Company}
            alt="company"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end"></div>
        </div>

         <div className="relative rounded-2xl overflow-hidden">
          <img
            src={Company}
            alt="company"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end"></div>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={Company}
            alt="company"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end"></div>
        </div>

       

       



        
       
      </div>
    </section>
  );
};

export default Homepage;
