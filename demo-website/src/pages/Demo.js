import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Demo = () => {
  useEffect(() => {
    document.title = "Demo";
  }, []);

  const [enter, setEnter] = useState(true);
  const [leave, setLeave] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Overview";
    document.body.style.overflowX = "auto";

    setTimeout(() => {
      setEnter(false);
    }, 1000);
  }, []);

  const handleReturn = () => {
    setLeave(true);
    setTimeout(() => {
      navigate("/track-the-crowd");
    }, 1000);
  };

  return (
    <div
    style={{
      position: "relative",
      backgroundColor: "#222",
      minHeight: "100vh",
      overflowX: "hidden",
      color: "#fff", 
      fontSize: "2rem"}}>
              <button
        onClick={() => handleReturn()}
        onMouseOver={(e) => {
          e.currentTarget.style.fontSize = "2.5vw"; // Enlarged font size on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.fontSize = "2vw"; // Return to normal size
        }}
        style={{
          position: "absolute",
          width: "fit-content",
          height: "7vh",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "clamp(3vh, 2vw, 3vw)",
          fontWeight: "bold",
          transition: "font-size 0.3s ease-in-out", // Smooth transition
        }}
      >
        Click to go back ⬅️
      </button>

      <div style={{margin: "5rem", lineHeight: "1.8" }}>

      <h1 style={{ textAlign: "center" }}>PROCESS</h1>
      <p>For our demo, we've created a cardboard model of a train wall to serve as our simulation environment as we test camera capturing and crowd estimating.</p>
      <p>Please stay tuned for a future video!</p>
      

      </div>
    </div>
  );
};

export default Demo;
