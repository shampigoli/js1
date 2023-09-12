import React, { useState } from "react";
import one from "/images/member11.jpg";
import two from "/images/member10.jpg";

function Prevbutton3() {
    const [image, setImage] = useState(0);
    const [allImages, setallImages] = useState([one, two]);
  return (
    <div>
           <img src={allImages[image]} className="w-96 h-[350px]" />
      <div className="flex justify-center items-center w-[100%] gap-2">
        <button
          style={{
            backgroundColor: "white",
            border: "5px",
            borderColor: "gray",
            width: "40px",
            height: "40px",
            textAlign: "center",
            color: "black",
            marginTop:"-40px",
          }}
          onClick={() => {
            if (image > 0) setImage(image - 1);
          }}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <br />
        <button
          style={{
            backgroundColor: "white",
            border: "2px",
            borderColor: "gray",
            width: "40px",
            height: "40px",
            textAlign: "center",
            color: "black",
            marginTop:"-40px",
          }}
          onClick={() => {
            if (image < allImages.length - 1);
            setImage(image + 1);
          }}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
   
    </div>
  )
}

export default Prevbutton3;