import React,{useState} from 'react'
import {Link, NavLink} from "react-router-dom";
import Prevbutton1 from '../components/prevbutton1';
import Prevbutton3 from '../components/prevbutton2';
import Prevmian from '../components/prevmain';
import Prevbutton from '../components/prevbutton';
function Member() {
    const [menu, setMenu] = useState(false)
  return (
    <div>
              <nav className="flex items-center justify-between bg-black text-white top-0 sticky z-10">
      <Link to="" className="text-3xl m-3 font-bold">AJ Styles</Link>
      <div onClick={()=>{setMenu(!menu)}} className="menu absolute top-2 right-2 flex-col justify-between w-5 h-5" >
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menu ? "open" : ""}>
          <li className="pr-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="pr-3">
          <NavLink to="/member">Member</NavLink>
          </li>
          <li className="pr-3">
          <NavLink to="/signin">Sign In</NavLink>
          </li>
        </ul>
        
        <Link to="/getstarted">
          <button className="bg-white border-[2px] border-white text-black p-2 hover:bg-black hover:text-white mr-[20px] rounded-md font-semibold">Get Started</button>
        </Link>

      </nav>
            {/* <Navbar/> */}
            <div className="sm-nav flex justify-center items-center bg-gray-400 w-full font-semibold text-lg text-black text-center h-6 space-x-2 ">
        $0 initiation. Offer ends soon.
        <Link to="/getstarted">
          <a href="#" className="underline">
            Claim Offer
          </a>
        </Link>
      </div>
            {/* header */}
            <header className="header_wrapper bg-fixed bg-[url(/images/2.jpg)] bg-cover w-full h-[122vh] flex p-[20px] items-center ">
        <div>
          <h1 className="text-[55px]  md:text-6xl lg:text-8xl text-white">
            MEMBERSHIP
          </h1>
          <h1 className="text-[55px] md:text-6xl lg:text-8xl text-white">
            WITH BENEFITS
          </h1>
          <h4 className="text-2xl md:text-3xl text-white mt-12 w-[96] lg:w-[850px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            tempora modi magni, mollitia quo doloribus asperiores?
          </h4>

          <button className="bg-white text-black  border-0 px-16 py-3 hover:bg-black hover:text-white hover:border-[1px] hover:border-white mt-12 text-xl">
            Get Started
          </button>
        </div>
      </header>
            {/* content */}
            <section className="bg-black h-auto pt-[100px] pb-[180px] flex justify-between items-start ">
        <div className="content text-white w-[80%] m-auto ">
          <div className="flex lg:gap-40 gap-20 flex-wrap">
            <h1 className="text-2xl lg:text-4xl font-bold flex">
              WHEN YOU <br /> JOIN
            </h1>
            <div className="font-semibold">
              <h3>
                Join Equinox today and unlock exclusive new member benefits
              </h3>
              <ul className=" list-disc">
                <li>Complimentary fitness assessment </li>
                <li>Complimentary Personal Training session </li>
                <li>Complimentary one-on-one Studio Pilates session</li>
                <li>15% off your first purchase at The Shop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
            {/* member1 photo section */}
            <section className="bg-black text-white p-12 pt-[40px]">
        <div className="flex lg:gap-40 gap-20 flex-wrap">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold flex flex-wrap">
              UNLIMITED <br /> CLASSES
            </h1>
            <p className="lg:w-80 w-full p-2 mt-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio magni quibusdam alias blanditiis odio reprehenderit
              laudantium soluta vel, rem, eum porro vitae similique dolorum
              totam iste molestiae velit impedit amet.
            </p>
            <br />
            <br />
            <p className="lg:w-80 w-full p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              mollitia.
            </p>
            <br />
            <p className="lg:w-80 w-full p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="md:w-64 w-44 mt-[20px] py-4 text-white bg-black border-[2px] border-white hover:bg-slate-600 text-2xl font-semibold">
              Learn More
            </button>
          </div>
          <div className=" md:ml-[100px] ml-0  md:w-[500px] w-full">
            <img
              src="/images/member1.jpg"
              alt=""
              className="w-full md:h-[100vh]"
            />
          </div>
        </div>
      </section>
            {/* member 2 3 pics section */}
            <section className="bg-black text-white pl-12 pt-[40px] pb-[100px] h-auto">
        <div className="flex lg:gap-40 gap-20 flex-wrap">
          <div className="">
            <h1 className="text-2xl lg:text-4xl font-bold flex">
              INDUSTRY- <br /> BEST <br /> PROGRAMMING
            </h1>
            <p className="lg:w-80 w-full p-2 mt-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio magni quibusdam alias blanditiis odio reprehenderit
              laudantium soluta vel, rem, eum porro vitae similique dolorum
              totam iste molestiae velit impedit amet.
            </p>
            <br />
            <br />
            <p className="lg:w-80 w-full p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              mollitia.
            </p>
            <button className="w-64 mt-[20px] py-4 text-white bg-black border-[2px] border-white hover:bg-slate-600 text-2xl font-semibold">
              Learn More
            </button>
          </div>
          <div className=" md:ml-[-100px] ml-0  md:w-[300px] w-96">
            <img
              src="/images/member2.jpg"
              alt=""
              className=" h-[80vh] w-96  md:w-[380px] absolute md:h-[75vh]"
            />
            <div className="pt-6 rounded-none  text-black relative top-[30%]   md:top-[50%] w-80 left-[20%] lg:left-[-15%] bg-white p-5 md:w-96 ">
        <div>
          <div variant="h5" color="black" className="mb-2 text-4xl font-bold">
          Membership with Benefits

          </div>
          <div>
          The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
          </div>
        </div>
        <div className="pt-0">
         <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold"></h2>
        </div>
      </div>
    
          </div>
          <div className="w-[340px]">
            <Prevbutton/>
          </div>
        </div>
      </section>
      {/* member 4 5 pics section */}
      <section className="bg-black text-white pl-12 pt-[40px] pb-[100px] h-auto">
        <div className="flex lg:gap-40 gap-20 flex-wrap">
          <div className="">
            <h1 className="text-2xl lg:text-4xl font-bold flex">
              JOIN THE
              <br />
              COLLECTIVE. <br />
              POWER YOU <br />
              PURSUT.
            </h1>
            <p className="lg:w-80 w-full p-2 mt-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio magni quibusdam alias blanditiis odio reprehenderit
              laudantium soluta vel, rem, eum porro vitae similique dolorum
              totam iste molestiae velit impedit amet.
            </p>
            <br />
            <br />
            <p className="lg:w-80 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              mollitia.
            </p>
            <button className="w-64  mt-[20px] py-4 text-white bg-black border-[2px] border-white hover:bg-slate-600 text-2xl font-semibold">
              Download Equinox +
            </button>
          </div>
          <div className=" md:ml-[-100px] ml-0 md:w-[300px] w-96">
            <img
              src="/images/member4.jpg"
              alt=""
              className=" h-[80vh] w-96  md:w-[380px] absolute md:h-[75vh]"
            />
             <div className="pt-6 relative top-[30%]   md:top-[50%] w-80 left-[-20%] lg:left-[-15%]rounded-none bg-white text-black p-5 md:w-96 ">
        <div>
          <div variant="h5" color="black" className="mb-2 text-3xl font-bold">
          The unrivaled collective
          </div>
          <div>                  Sweat with Equinox, ride with SoulCycle, shake with
                  [solidcore], recover with TB12, flow with PURE Yoga, push your
                  pace with Precision Run, and meditate with HeadStrong—all in
                  one app.
          </div>
        </div>
        <div className="pt-0">
         <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold"></h2>
        </div>
      </div>
          </div>
          <div className="w-[340px]">
            <Prevbutton1 />
          </div>
        </div>
      </section>
            {/* member main  */}
            <section className="bg-black text-white pl-12 flex-wrap pt-[40px] pb-[100px] h-auto">
        <div className="flex lg:gap-40 gap-20 flex-wrap md:w-full">
          <div className="">
            <h1 className="text-2xl lg:text-4xl font-bold flex">
              JOIN THE
              <br />
              COLLECTIVE. <br />
              POWER YOU <br />
              PURSUT.
            </h1>
            <p className="lg:w-80 w-full p-2 mt-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio magni quibusdam alias blanditiis odio reprehenderit
              laudantium soluta vel, rem, eum porro vitae similique dolorum
              totam iste molestiae velit impedit amet.
            </p>
            <br />
            <br />
            <p className="lg:w-80 w-full p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              mollitia.
            </p>
            <button className="w-64  mt-[20px] py-4 goli text-white bg-black border-[2px] border-white hover:bg-slate-600 text-2xl font-semibold">
              Learn More
            </button>
          </div>
          <div className="lg:w-[700px] w-full p-5 golo h-[40vh]">
            <img src="/images/hero.jpg" alt="" />
          </div>
        </div>
      </section>
            {/* member 10 11  */}
            <section className="bg-black text-white pl-12 pt-[40px] pb-[100px] h-auto">
        <div className="flex lg:gap-40 gap-20 flex-wrap">
          <div className="">
            <h1 className="text-2xl lg:text-4xl font-bold flex">
              INDUSTRY- <br /> BEST <br /> PROGRAMMING
            </h1>
            <p className="lg:w-80 w-full p-2 mt-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio magni quibusdam alias blanditiis odio reprehenderit
              laudantium soluta vel, rem, eum porro vitae similique dolorum
              totam iste molestiae velit impedit amet.
            </p>
            <br />
            <br />
            <p className="lg:w-80 w-full p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              mollitia.
            </p>
            <button className="w-64 mt-[20px] py-4 text-white bg-black border-[2px] border-white hover:bg-slate-600 text-2xl font-semibold">
              Learn More
            </button>
          </div>
          <div className=" md:ml-[-100px] ml-0  md:w-[300px] w-96">
            <img
              src="/images/member10.jpg"
              alt=""
              className=" h-[80vh] w-96  md:w-[380px] absolute md:h-[75vh]"
            />
            <div className="pt-6 relative top-[30%]   md:top-[50%] w-80 left-[-20%] lg:left-[-15%]rounded-none bg-white text-black p-5 md:w-96 ">
        <div>
          <div variant="h5" color="black" className="mb-2 text-3xl font-bold">
          Provenance
          </div>
          <div>   Provenance Meals is a luxury meal service to help busy people
                  achieve their goals. Meals and cleanse programs are 100% free
                  of gluten, dairy, refined sugars, and canola oil, designed by
                  wellness experts and made from scratch with local ingredients.
          </div>
        </div>
        <div className="pt-0">
         <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold"></h2>
        </div>
      </div>
          </div>
          <div className="w-[340px]">
            <Prevbutton3 />
          </div>
        </div>
      </section>
      {/* getstarted */}
      <section className='relative'>
      <div className="flex h-[140vh]">
        <div className="w-[100%]  md:w-[50%] text-white h-[100vh] bg-center bg-cover bg-no-repeat bg-[url(/images/getstarted.jpg)] got">
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
        <div className="right-7 top-5 absolute h-[140vh]">
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
      </section>
              {/* footer */}
              <section className="footer_wrapper bg-white text-black  border-t-[1px] border-gray-600 pt-[50px] pb-[50px] flex justify-between">
        <div className="list flex flex-col pl-[30px] text-gray-500 hover:text-black gap-4">
          <a href="#" className="text-black">
            About
          </a>

          <a href="#" className="hover:text-black">
            Blog
          </a>

          <a href="#" className="hover:text-black">
            Benefits
          </a>

          <a href="#" className="hover:text-black">
            Membership{" "}
          </a>

          <a href="#" className="hover:text-black">
            Services
          </a>

          <a href="#" className="hover:text-black">
            Contact
          </a>

          <a href="#" className="hover:text-black">
            Gift Crad
          </a>
        </div>
        <div className="flex pr-[30px]">
          <img
            src="/images/facebook-1.jpg"
            alt=""
            className="w-[50px] h-[50px]"
          />

          <img src="/images/twitter.jpg" alt="" className="w-[50px] h-[50px]" />
          <img src="/images/youtube.jpg" alt="" className="w-[50px] h-[50px]" />

          <img
            src="/images/instagram.jpg"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </div>
      </section>

      <div className="flex justify-center gap-4 text-[14px] pb-[50px] text-gray-500 bg-white flex-wrap">
        <a href="#" className="hover:text-black">
          Send feedback
        </a>

        <a href="#" className="hover:text-black">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-black">
          California Customer
        </a>

        <a href="#" className="hover:text-black">
          Privacy Statments
        </a>

        <a href="#" className="hover:text-black">
          Do Not Sell or Share My Personal Information
        </a>

        <a href="#" className="hover:text-black">
          Terms & Conditions
        </a>

        <a href="#" className="hover:text-black">
          FAQs
        </a>

        <a href="#" className="hover:text-black">
          Cookie Settings
        </a>
      </div>
    </div>
  )
}

export default Member;