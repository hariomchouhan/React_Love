import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    // move to support page
    navigate("/labs");
  };
  return (
    <div>
      <div>This is Support page</div>
      <button onClick={clickHandler}>Move to Labs Page</button>
    </div>
  );
};

export default Support
