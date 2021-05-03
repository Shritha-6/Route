import React from "react";
import { useHistory } from "react-router-dom";
function Card5() {
  let history = useHistory();
  return (
    <div className="Card5" onClick={() => history.push("/class5")}>
      Class5
    </div>
  );
}

export default Card5;
