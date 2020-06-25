import React, { useContext, useEffect } from "react";
import { InitialContext } from "../contexts/InitialContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import Session from "./Session";

const ClassList = () => {
  const { session, setSession } = useContext(InitialContext);
  console.log(session);
  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then((res) => {
        console.log(res);
        setSession(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [setSession]);

  return (
    <>
      <div>
        {session.map((sesh, i) => (
          <Session key={i} id={sesh.id} name={sesh.name} />
        ))}
      </div>
    </>
  );
};

export default ClassList;
