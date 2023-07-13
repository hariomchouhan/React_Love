import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      // save data into a variable
      setCourses(data.data);
    } catch (error) {
      toast.error("Something went to wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

<div className="bg-bgDark2 min-h-screen">
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">{loading ? <Spinner /> : <Cards courses={courses} category={category} />}</div>
      </div>
    </div>
  );
};
export default App;
