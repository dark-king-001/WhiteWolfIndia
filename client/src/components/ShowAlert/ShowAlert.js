import React, { useState, useEffect } from "react";
import "./ShowAlert.css";

const Alert = ({ message, type }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closeAlert = () => {
    setShow(false);
  };

  return (
    <div
      className={`alert ${type}`}
      style={{ display: show ? "block" : "none" }}
    >
      {message}
      <span className="close" onClick={closeAlert}>
        &#9587;
      </span>
    </div>
  );
};

export default Alert;
