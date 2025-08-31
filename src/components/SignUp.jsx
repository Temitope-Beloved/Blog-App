import React from 'react'
import Input from "./custom-element/Input";
import Button from "./custom-element/Button";
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
       {/* Form Section */}
     <h1 className="font-semibold font-poppins text-3xl tracking-wider">
       Create an Account
     </h1>
     <p className="pt-4">
       Already have an account?{" "}
       <Link to="/login" className="underline text-blue-700">Log in</Link>
     </p>

     <form className="w-full mt-6">
       <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
         <Input
           type="text"
           placeholder="First Name"
           name="firstname"
           id="firstname"
           className="bg-inputBg w-full"
         />
         <Input
           type="text"
           placeholder="Last Name"
           name="lastname"
           id="lastname"
           className="bg-inputBg w-full"
         />
       </div>

       <div className="mb-4">
         <Input
           type="email"
           placeholder="Email"
           name="email"
           className="bg-inputBg w-full"
         />
       </div>

       <div className="mb-4">
         <Input
           type="password"
           placeholder="Password"
           name="password"
           className="bg-inputBg w-full"
         />
       </div>

       <div className="flex items-center gap-2 text-sm mb-4">
         <Input type="checkbox" id="terms" />
         <label htmlFor="terms">
           I agree to the{" "}
           <Link to="/terms" className="text-blue-700 underline">Terms & Conditions</Link>
         </label>
       </div>

       <Button className="w-full bg-violet-800 text-white font-semibold hover:bg-violet-600">
         Sign Up
       </Button>
     </form>
   </div>
  )
}

export default SignUp