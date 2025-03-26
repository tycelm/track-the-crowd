import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const [enter, setEnter] = useState(true);
  const [leave, setLeave] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Links";
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
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          position: "absolute",
          width: "50vw",
          height: "200vh",
          backgroundColor: "white",
          zIndex: 1,
          transition: "transform 0.8s ease-in-out",
          transform: enter || leave ? "translateX(0)" : "translateX(-100%)",
        }}
      />

      {/* Right Panel */}
      <div
        style={{
          position: "absolute",
          width: "50vw",
          height: "200vh",
          backgroundColor: "white",
          marginLeft: "50vw",
          zIndex: 1,
          transition: "transform 0.8s ease-in-out",
          transform: enter || leave ? "translateX(0)" : "translateX(100%)",
        }}
      />

      {/* Title */}
      <h1
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#222",
          fontSize: "8vw",
          zIndex: 2,
          transition: "opacity 0.2s ease-in-out",
          opacity: enter ? 1 : 0,
        }}
      >
        Arriving at....
      </h1>

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

      {/* Text */}
      <div style={{ color: "#fff", fontSize: "2rem" }}>
        <img
          src={`${process.env.PUBLIC_URL}/backgrounds/links.jpg`}
          style={{ objectFit: "contain", width: "100vw" }}
        ></img>
        <div style={{ margin: "5rem" }}>
          {" "}
          <h1 style={{ textAlign: "center" }}>DEMO</h1>
          <p>Stay tuned!</p>
        </div>
      </div>
    </div>
  );
};

export default Links;
