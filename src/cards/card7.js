import React from "react";
import { useHistory } from "react-router-dom";
function Card7() {
  let history = useHistory();
  function handleClick() {
    history.push("/class7");
  }
  return (
    <div className="Card7" onClick={handleClick}>
      Class7
    </div>
  );
}

export default Card7;
