import NavBar from './navBar'
import { useState } from "react";
import {Link} from 'react-router-dom'
function ImageSlides() {

  const images = [
    "https://img.freepik.com/free-photo/streetlights-cloudy-day_23-2148098648.jpg?t=st=1731238888~exp=1731242488~hmac=741bc18d81a95e7efd3efca6bd1a5d9852bf3845424c06061778b9e4f11af015&w=740",
    "https://img.freepik.com/premium-photo/hurricane-season-sign-yellow-orange-color-storm-weather-nature-climate-wind-environment-danger-sky-r_178037-4384.jpg?w=740", 
    "https://img.freepik.com/free-photo/morning-happy-valley-sunshine-coast-queensland-australia_181624-12025.jpg?t=st=1731239487~exp=1731243087~hmac=b337ff56f4d709f47925e870fb152361051785c5677f1d7f25975df8df9ebb91&w=740"
];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage =()=>{
    setCurrentImageIndex((prevIndex)=>(prevIndex+1)% images.length)
  }

  const prevImage =()=>{
    setCurrentImageIndex((prevIndex)=>
    prevIndex === 0 ? images.length -1 : prevIndex -1
    )
  }


  return (
    <>
    <NavBar/>
    <div className="relative w-full h-[500px]">
      <img
        src={images[currentImageIndex]}
        className="w-full h-full object-fill"
        alt="Slide"
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-bold text-2xl"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white font-bold text-2xl"
      >
        &#10095;
      </button>
      <Link to="/weather">
      <button>CHECK WEATHER</button>
      </Link>
    </div>
    </>
   
  );
}

export default ImageSlides;
