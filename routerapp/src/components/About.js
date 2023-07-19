import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    // move to support page
    navigate("/support");
  };

  const backHandler = () => {
    // go to previous page
    navigate(-1);
  }
  return (
    <div>
      <div>This is about page</div>
      <button onClick={clickHandler}>Move to Support Page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default About;
