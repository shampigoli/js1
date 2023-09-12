import React,{useEffect} from "react";
import { Link } from 'react-router-dom';

function Getstarted() {
  

  return (
  <>
      <div className="flex h-[100vh]">
        <div className=" got w-[50%] text-white h-[140vh] bg-center bg-cover fixed bg-no-repeat bg-[url(/images/getstarted.jpg)]">
          <h1 className="md:text-6xl text-center text-4xl font-bold text-white mt-[190px]  ">
            THE EQUINOX
          </h1>
          <h1 className="text-center md:text-6xl text-4xl font-bold">
            <span className="line-through text-left">SALE</span>
          </h1>
          <h4 className="text-2xl mt-6 text-center font-semibold">
            $0 initiation. Offer ends soon.
          </h4>
          <h1 className="text-2xl md:text-[30px] font-semibold mt-[100px] text-center">
              AJ Styles
            </h1>
        </div>
        <div className="right-7 top-5 absolute ">
        <Link to="/leave">
        <i className="bi bi-x-lg "></i></Link>
        </div>
        <div className=" w-96 flex absolute getstart right-[110px]  justify-end items-end mt-20 gap-2 font-extrabold p-8"> 
        <input
            type="text"
              placeholder="First Name"
              className="trp w-48"
            />
           <input type="text"
              placeholder="Last Name"
              className="trp w-48"
            />
        </div>
        <div className="flex-col getstart w-96 flex absolute right-36 justify-end items-end mt-48 gap-10 font-extrabold">
        <input
            type="text"
              placeholder="Email address"
              className="trp w-96"
            />

            <input
            type="text"
              placeholder="Phone Number"
              className="trp w-96"
            />
           <input
            type="text"
              placeholder="Select A Club "
              className="trp w-96"
            />
          <div className="text-black font-normal flex gap-2 text-sm">
            <input type="checkbox" />
            <p className="mt-[20px]">
              Sign up to get texts from Equinox about exclusive invites,
              promotions, and news.
            </p>
          </div>
          <p className="text-[12px] font-light">
            By checking this box, you agree to receive recurring automated
            promotional and personalized marketing text messages (e.g.
            promotions or cart reminders) from Equinox at the cell number used
            when signing up. Consent is not a condition of any purchase. Reply
            HELP for help and STOP to cancel. Msg frequency varies. Msg & data
            rates may apply. View{" "}
            <span className="underline cursor-pointer"> Terms</span> and
            <span className="underline cursor-pointer">Privacy.</span>
          </p>
          <div className="flex justify-center items-center gap-4 w-96">
            <button className="bg-gray-300 p-4 text-gray-800 font-semibold text-xl">Visit A Club</button>
            <button className="bg-gray-300 p-4 text-gray-800 font-semibold text-xl">Join Online</button>
          </div>
          <p className="text-[12px] font-light pb-[150px]">By continuing, I agree to share my contact information with a Membership advisor.</p>
        </div>

      </div>
      </>
  );
            }

export default Getstarted;
