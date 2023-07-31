import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-11/12 max-w-[670px] mx-auto my-[80px]">
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
