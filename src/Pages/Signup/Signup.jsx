import React from "react";
import Image from "../../assets/3d.jpg";
import { Link } from "react-router-dom";
import Input from "../../Custom-Element/Input";
import Button from "../../Custom-Element/Button";
const Signup = () => {
  return (
    <div className="bg-white/100 w-[100%] h-[100vh] green">
      <div className="absolute bg-white  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] h-[80%] rounded-lg shadow-2xl grid grid-cols-2 sm:grid-cols-1">
        <div className="relative sm:hidden">
          <img
            src={Image}
            alt=""
            className="w-[100%] h-[100%] p-2 rounded-2xl object-cover z-10 "
          />
          <div className="absolute  z-20 w-[50%] top-[85%] p-3 left-[40%] space-x-3">
            <button className=" rounded-full p-1 bg-violet-800 "></button>
            <button className="bg-white rounded-full p-1 "></button>
            <button className="bg-white rounded-full p-1 "></button>
            <button className="bg-white rounded-full p-1 "></button>
          </div>
        </div>
        <div className="p-8  flex flex-col items-center  ">
            <h1 className="font-semibold font-poppins text-3xl leading-5 tracking-wider">Create an Account</h1>
            <p className="pl-2 pt-4">Already have an account? <Link to='/login' className="underline text-blue-700">Log in</Link></p>

            <form action="" className=" ">
                <div className="flex items-center gap-10">

                    <label htmlFor="firstname">
                        <Input type="text" placeholder="FirstName" name="firstname" id="firstname" className='bg-[#D7D8DC] w-2/3'/>
                    </label>
                    <label htmlFor="lastname">
                        <Input type="text" placeholder="LastName" name="lastname" id="lastname" className='bg-[#D7D8DC]'/>
                    </label>
                  

                </div>

               <div className="block">
               <label htmlFor="email">
                    <Input type="email" placeholder="Email"  className='w-full bg-[#D7D8DC]'/>
                </label>
                <label htmlFor="password">
                    <Input type="password" placeholder="Password"  className="w-full bg-[#D7D8DC]"/>
                </label>


                <label htmlFor="remember-me">
                    <Input type="checkbox" placeholder="remember"  /> I agree to the <Link>Terms & condition</Link>
                </label>
                <div className="border-b-2 pb-5 relative border-slate-500  ">

                <Button className="w-full bg-violet-800 text-white font-semibold hover:bg-violet-600 ">Sign Up</Button>
                </div>

                
               </div>
            </form>
           
        </div>
      </div>
    </div>
  );
};

export default Signup;
