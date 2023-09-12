import React from 'react';

import { Link } from 'react-router-dom';
  function Forgot() {
  return (
    <>
    <center>
    <div className='pt-[50px] bg-black h-auto text-white pb-[200px]'>
    <div className='flex justify-center '>
    <Link to="/signin"><i className="bi bi-chevron-left pr-24"></i></Link>

    <h1 className='text-2xl md:text-[30px] font-semibold text-center pb-[40px]'>AJ Styles</h1>
    <h1 className='pr-40'></h1>
    </div>
    <h1 className='text-2xl md:text-4xl font-bold pb-[20px]'>Reset Password</h1>
    <p className='text-gray-500 w-[400px] text-left mt-10'>
    Enter the email address associated with your AJ Styles 
     account below.
    </p>
    
    <div className='flex w-96 flex-col gap-12 text-white mt-14'>
    <input
            type="text"
              placeholder="Email"
              className="bg-black trrp"
            />
    </div>
   
    <button className="bg-white text-black  border-[1px] w-40  flex justify-center items-center  border-black py-3 hover:bg-black hover:text-white hover:border-[1px] hover:border-white  text-xl mt-14">Reset Password</button>
    </div>

        </center>
    </>
  )
}

export default Forgot;