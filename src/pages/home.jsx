import React,{useState} from "react";
import {Link, NavLink} from "react-router-dom";
import Prevmian from "../components/prevmain";

function Home() {
  const [menu, setMenu] = useState(false)
  const arr = [
    {
      name: "The Spa",
      name2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere adipisci, officia impedit pariatur voluptatem voluptatum atque dignissimos aliquid molestias corrupti",
      name3: " Discover The Spa",
      img: "./images/nat-7.jpg",
    },
    {
      name: " Meditation",
      name2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere adipisci, officia impedit pariatur voluptatem voluptatum atque dignissimos aliquid molestias corrupti",
      name3: " Discover The Spa",
      img: "./images/nat-6.jpg",
    },
    {
      name: "Strech and Recovery",
      name2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere adipisci, officia impedit pariatur voluptatem voluptatum atque dignissimos aliquid molestias corrupti",
      name3: "Discover Recovery",
      img: "./images/3.jpg",
    },
  ];
  const arr2 = [
    {
      name: "The Spa",
      name2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere adipisci, officia impedit pariatur voluptatem voluptatum atque dignissimos aliquid molestias corrupti",
      name3: " Discover The Spa",
      img: "./images/headerimge.jpg",
    },
    {
      name: "HeadStrong Meditation",
      name2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere adipisci, officia impedit pariatur voluptatem voluptatum atque dignissimos aliquid molestias corrupti",
      name3: " Discover The Spa",
      img: "./images/2ndportfolio.jpg",
    },
    {
      name: "Strech and Recovery",
      name2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere adipisci, officia impedit pariatur voluptatem voluptatum atque dignissimos aliquid molestias corrupti",
      name3: "Discover Recovery",
      img: "./images/3.jpg",
    },
  ];
  return (
    <div>
      <nav className="flex items-center justify-between bg-black text-white top-0 sticky z-10">
      <Link to="" className="text-3xl m-3 font-bold">AJ Styles</Link>
      <div onClick={()=>{setMenu(!menu)}} className="menu absolute top-2 right-2 flex-col justify-between w-5 h-5" >
        <span className="h-[9px] mt-[3.2px] bg-white w-full rounded-sm"></span>
        <span className="h-[9px] mt-[3.2px] bg-white w-full rounded-sm"></span>
        <span className="h-[9px] mt-[3.2px] bg-white w-full rounded-sm"></span>
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
            {/* header */}
            <header className="header_wrapper bg-fixed bg-[url(/images/hdmobile.jpg)] lg:bg-[url(/images/headerimge.jpg)] bg-cover w-full h-[140vh] flex p-[20px] items-center ">
        <div>
          <h1 className="text-[55px]  md:text-6xl lg:text-8xl text-white">
            IT'S NOT FITTNESS.
          </h1>
          <h1 className="text-[55px] md:text-6xl lg:text-8xl text-white">
            IT'S LIFE.
          </h1>
          <h4 className="text-2xl md:text-3xl text-white mt-12">
            Join today and unlock your new member benefits
          </h4>

          <button className="bg-white text-black  border-0 px-16 py-3 hover:bg-black hover:text-white hover:border-[1px] hover:border-white mt-12 text-xl">
            <Link to="/getstarted">Get Started</Link>
          </button>
        </div>
      </header>
      <section className="about_wrapper bg-[url(/images/aboutsec.jpg)] md:h-[140vh] w-full relative bg-center bg-cover bg-no-repeat p-[50px] h-[100vh]">
      <div className="pt-6 w-[300px] rounded-none absolute bg-white p-5 md:w-96 ">
        <div>
          <div variant="h5" color="black" className="mb-2 text-4xl font-bold">
            Membership with   Benefits 
          </div>
          <div>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </div>
        </div>
        <div className="pt-0">
         <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold">Veiw Membership Benefits</h2>
        </div>
      </div>
    
     
      </section>
            {/* Clubs section */}
            <section className="clubs_wrapper w-full relative overflow-hidden h-[100vh]">
        <video
          src="/video.mp4"
          className="relative w-full h-screen object-cover"
          autoPlay
          muted
          loop
        />
        <div className="card absolute top-[7%] left-[3%] ">
        <div className="pt-6 w-[300px] rounded-none absolute bg-white p-5 md:w-96 ">
        <div>
          <div variant="h5" color="black" className="mb-2 text-4xl font-bold">
            Membership with   Benefits 
          </div>
          <div>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </div>
        </div>
        <div className="pt-0">
         <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold">Veiw Membership Benefits</h2>
        </div>
      </div>
        </div>
      </section>

      <div 
          className="md:h-[100vh] h-[140vh] golo bg-center bg-cover bg-no-repeat flex justify-center items-end bg-[url(/images/3.jpg)] "
        style={{
          display: "flex",
          alignItems: "end",
          gap: "10px",
          paddingBottom: "20px",
          flexWrap: "wrap",
          overflow: "visible",
          
        }}
      >
        {arr2.map((box) => {
          const { name, name2, name3, img } = box;
          return (
            <div
              onMouseOver={() => {
                document.querySelector(
                  ".golo"
                ).style.backgroundImage = `url(${img})`;
              }}
            >
          <div className="flex items-end justify-center w-full ">
          <div className="flex items-end justify-center w-full ">
                <div className="card pt-6  w-96 rounded-none bg-transparent p-5 hover:bg-white shadow-none cursor-pointer border-t-[1px] text-white hover:text-black">
                  <div>
                    <div variant="h5" className="mb-0 text-[31px] font-bold">
                      {name}
                    </div>
                    <h2>{name2}</h2>
                  </div>
                  <div className="pt-0">
                    <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold">
                      {name3}
                    </h2>
                  </div>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      <section className="mobile_wrapper relative bg-[url(/images/mobilemd.jpg)] lg:bg-[url(/images/mobile.jpg)] w-full h-[140vh] bg-center bg-no-repeat bg-cover p-14 ">
      <div className="pt-6 w-[300px] rounded-none absolute bg-white p-5 md:w-96 ">
        <div>
          <div variant="h5" color="black" className="mb-2 text-4xl font-bold">
            Membership with   Benefits 
          </div>
          <div>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </div>
        </div>
        <div className="pt-0">
         <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold">Veiw Membership Benefits</h2>
        </div>
      </div>

      </section>

      <section>
      <div
        className="md:h-[100vh] h-[140vh] golo2 bg-center bg-cover bg-no-repeat flex justify-center items-end bg-[url(/images/2ndportfolio.jpg)] !important"
        style={{
          display: "flex",
          alignItems: "end",
          gap: "10px",
          paddingBottom: "20px",
          flexWrap: "wrap",
          overflow: "visible",
          
        }}
      >
        {arr.map((box) => {
          const { name, name2, name3, img } = box;
          return (
            <div
            key={name}
              onMouseOver={() => {
                document.querySelector(
                  ".golo2"
                ).style.backgroundImage = `url(${img})`;
              }}
            >
              <div className="flex items-end justify-center w-full ">
                <div className="card pt-6  w-96 rounded-none bg-transparent p-5 hover:bg-white shadow-none cursor-pointer border-t-[1px] text-white hover:text-black">
                  <div>
                    <div variant="h5" className="mb-0 text-[31px] font-bold">
                      {name}
                    </div>
                    <h2>{name2}</h2>
                  </div>
                  <div className="pt-0">
                    <h2 className="border-b-black underline hover:text-gray-500 cursor-pointer font-semibold">
                      {name3}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </section>
            {/* carosal section */}
            <section className="carousel_wrapper flex flex-wrap pt-[100px] pb-[20px]">
        <div className="content w-[100%] md:w-[40%] pl-[40px]">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Explore A Club Near You
          </h1>
          <h4 className="pt-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            optio sequi reiciendis illo, repudiandae quod in maxime totam
            quibusdam. Ducimus, eius magni explicabo esse quisquam ipsum eos
            odio voluptatem repudiandae!
          </h4>

          <button className="bg-white text-black  border-[1px]  border-black px-16 py-3 hover:bg-black hover:text-white hover:border-[1px] hover:border-white mt-12 text-xl">
            Join Now
          </button>
        </div>
        <div className="lg:ml-[100px] ml-0">
          <Prevmian />
        </div>
        <div>{/* <Caro/> */}</div>
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
  );
}

export default Home;
