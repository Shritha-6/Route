import React from "react";
import { useHistory } from "react-router-dom";
function Card6() {
  let history = useHistory();
  return (
    <div className="Card6" onClick={() => history.push("/class6")}>
      Class6
    </div>
  );
}

export default Card6;
