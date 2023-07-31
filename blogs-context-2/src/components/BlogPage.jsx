import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { newBaseUrl } from "../baseUrl";
import BlogDetails from "./BlogDetails";

const BlogPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);

  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  const fetchRelatedBlogs = async () => {
    setLoading(true);
    let url = `${newBaseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("error aaya hai blogId wali call mein: ", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => navigation(-1)}
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
        >
          Back
        </button>
      </div>
      {loading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : blog ? (
        <div className="w-11/12 max-w-[670px] mx-auto my-[70px]">
          <BlogDetails post={blog} />
          <h2 className="mt-[2rem] font-bold text-2xl mb-[1rem]">
            Related Blogs
          </h2>
          {relatedblogs.map((post) => (
            <div key={post.id} className="mb-[1rem]">
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Blog Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
