import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center pb-10">
      <h1 className="bg-white rounded-md w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
