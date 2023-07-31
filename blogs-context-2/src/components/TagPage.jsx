import React from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className="w-11/12 max-w-[670px] mx-auto my-[80px]">
        <button
          onClick={() => navigation(-1)}
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
        >
          Back
        </button>
        <h2 className="mt-3">
          Blogs Tagged <span className="font-bold">#{tag}</span>
        </h2>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default TagPage;
