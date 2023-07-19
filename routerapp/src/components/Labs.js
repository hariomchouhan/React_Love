import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {

  const navigate = useNavigate();
  const clickHandler = () => {
    // move to about page
    navigate("/about");
  }
  return (
    <div>
      <div>This is labs page</div>
      <button onClick={clickHandler}>Move to About Page</button>
    </div>
  );
};

export default Labs;
