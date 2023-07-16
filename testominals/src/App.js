import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100%] md:h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center mb-8 md:mb-0">
        <h1 className="text-4xl font-bold my-8 md:my-0">Our Testimonial</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto rounded-lg"></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  )
};

export default App;
