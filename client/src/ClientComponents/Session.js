import React from "react";
import { InitialContext } from "../contexts/InitialContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Session = (props) => {
  //   console.log(props);

  return (
    <>
      <div className="classes">
        <p>{props.name}</p>
        {/* <p>{props.type}</p>
        <p>For {props.duration}</p>
        <p>At {props.startTime}</p>
        <p>Intensity: {props.intensityLevel}</p>
        <p>In {props.location}</p>
        <p>{props.attendees} signed up</p>
        <p>{props.maxClassSize} attendees max</p> */}
        {/* <div className="reserve"> */}
        {/* <Link to="/reserved-classes"> */}
        {/* <button
            onClick={(e) => {
              e.stopPropagation();
              reserveSession(session);
            }}
          > */}
        {/* Reserve */}
        {/* </button> */}
        {/* </Link> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Session;
