import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  // consume
  const { loading, posts } = useContext(AppContext);
  console.log("Printing inside blogs component");
  console.log(posts);

  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 my-[70px] justify-center items-center">
      {loading ? (
        <Spinner className='flex items-center' />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm">
              By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-sm">Posted on {post.date}</p>
            <p className="text-md my-[10px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return <span key={index} className="text-blue-500 underline font-bold text-xs">{`#${tag} `}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
