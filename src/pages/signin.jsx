import React from "react";

import { Link } from "react-router-dom";
function Signin() {
  return (
    <center>
      <div className="pt-[50px] bg-black h-auto text-white pb-[100px]">
        <h1 className="text-2xl md:text-[30px] font-semibold pb-[40px]">
          AJ Styles
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold pb-[20px]">Sign In</h1>
        <div className="flex w-96 flex-col gap-12">
          <div className="flex flex-col text-white">
            <input
              type="text"
              placeholder="Email"
              className="bg-black trrp"
            />
          </div>
          <input
            type="text"
            placeholder="Password"
            className="bg-black trrp"
          />
          <div className="flex justify-center text-[14px]">
            <p className="underline">
              {" "}
              <Link to="/forgot">Forgot Password</Link>{" "}
            </p>
            &nbsp;
            <span className="text-gray-500">or</span>
            &nbsp;
            <Link to="/create" className="underline">
              Create an account
            </Link>
          </div>
          <div className="flex justify-center text-[12px] text-left">
            <p className="text-gray-400">
              By clicking "Sign in", you agree to our{" "}
              <span className="underline"> Terms and Conditions</span> and
              consent to our <span className="underline">Privacy Policy</span>{" "}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white text-black  border-[1px] w-40  flex justify-center items-center border-black py-3 hover:bg-black hover:text-white hover:border-[1px] hover:border-white mt-1 text-xl">
              <Link to="/">Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Signin;
