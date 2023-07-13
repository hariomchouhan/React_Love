import React, { useState } from "react";
import Card from "./Card";

export default function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  let allCourses = [];

  // returns you a list of all courses received from the api response
  const getCourses = () => {
    if(category === "All") {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;      
  }
  else {
    // main sirf specific category ka data array karunga
    return courses[category];
  }

  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {!courses ? (
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="text-white text-7xl font-bold">ERROR 404</h1>
                <p className="text-white text-5xl font-semibold">No Data Found</p>
            </div>
        ) : (getCourses().map((course) => {
            return (
            <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            )
          }))}

    </div>
  );
}
