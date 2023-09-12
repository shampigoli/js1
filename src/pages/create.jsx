import React from "react";
import { Link } from 'react-router-dom';


function Create() {
  return (
    <div>
      <center>
        <div className="bg-black  h-auto text-white pb-[170px]">
          <h1 className="text-2xl pt-[20px] pb-[20px] md:text-[30px] font-semibold fixed w-full bg-black text-center">
            AJ Styles
          </h1>
          <h1 className="text-[50px] pt-[120px]">ACTIVATE YOUR ACCOUNT</h1>
          <h4 className="w-96 md:w-[850px] text-center mt-[70px]">
            YOU'LL BE ABLE TO SCHEDULE CLASSES AND PERSONAL TRAINING, TRACK YOUR
            PERFORMANCE, UPDATE YOUR PREFERENCES AND MUCH MORE.
          </h4>
          <h4 className="font-bold text-lg mt-[60px]">
          COUNTRY
          </h4>
          <h4 className="font-bold text-lg mt-[10px]">
          BARCODE ID
          </h4>
          <input type="text" className="bg-black w-96 text-center text-white border-[2px] border-gray-500 p-4 ring-1 ring-black focus:outline-none" />
          <h4 className="font-bold text-lg mt-[10px]">
          LAST NAME
          </h4>
          <input type="text" className="bg-black w-96 text-center text-white border-[2px] border-gray-500 p-4 ring-1 ring-black focus:outline-none"/>

          <div className="flex justify-center items-center mt-[70px]">

        <Link to="/signin" className="flex justify-center items-center">
        <a className="w-96 bg-slate-50 hover:bg-slate-200 absolute text-center font-semibold text-black text-lg p-4 outline-none">Get Access </a>
        </Link>
          </div>
        </div>
        
      
      </center>
    </div>
  );
}

export default Create;
