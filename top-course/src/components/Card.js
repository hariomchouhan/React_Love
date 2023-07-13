import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Card(props) {
let course = props.course;
let likedCourses = props.likedCourses;
let setLikedCourses = props.setLikedCourses;

  const clickHandler = () => {
    if(likedCourses.includes(course.id)) {
      // pehle se like hua pada tha
      setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id)));
      toast.warning("Like removed");
    }
    else {
      // pehle se like nahi hai ye course
      // insert karna hai ye course liked course me
      if(likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        // non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully")
    }
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-[0.5rem] overflow-hidden shadow shadow-[#7460bd]">
      <div className="relative">
        <img src={course.image.url} alt="" />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            { likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)}
          </button>
        </div>
      </div>

      <div className="py-4 px-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2">{course.description.length > 100 ? (course.description.substr(0, 100)) + "..." : (course.description)}</p>
      </div>
    </div>
  );
}