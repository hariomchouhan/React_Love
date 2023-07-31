import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-lg">{post.title}</span>
      </NavLink>
      <p className="text-sm my-1">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className="font-semibold underline cursor-pointer"
        >
          {post.category}
        </NavLink>
      </p>
      <p className="text-sm">Posted on {post.date}</p>
      <p className="mt-4 mb-2">{post.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {post.tags.map((tag, index) => (
          <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
            <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
