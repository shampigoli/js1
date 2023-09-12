import React from 'react'
import { Link } from 'react-router-dom';

function Leave() {
  return (
    <div>
    <div className='bg-black flex justify-center items-center h-[100vh]'>
        <div className='w-[350px] bg-white p-5  text-black h-[50vh]'>
        <div className=" flex flex-col justify-center items-center">
                <h1 className="text-4xl">
                Are You Sure Want To leave?
                </h1>
                <p className="text-sm pt-5">Your Progress will not be saved.</p>
                <Link to="/getstarted">
                <button className="bg-black w-48 py-3 mt-2 text-white hover:bg-gray-800">
                Stay
                </button>
                </Link>
                <Link to="/">
                <button className="bg-white w-48  py-3 mt-2 text-black border-[2px] hover:bg-slate-800 hover:text-white border-black">
                leave
                </button>
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Leave;