import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
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

      {/* Text Content */}
      <div style={{ color: "#fff", fontSize: "2rem" }}>
        <img
          src={`${process.env.PUBLIC_URL}/backgrounds/overview.jpg`}
          style={{ objectFit: "contain", width: "100vw" }}
        ></img>
        <div style={{ margin: "5rem", lineHeight: "1.8" }}>
          {" "}
          <h1 style={{ textAlign: "center" }}>OUR PURPOSE</h1>
          <p>Hi there!</p>
          <p>We're a team of four computer science students at the University of Toronto.</p>
          <p>For completion of our Capstone Design Project (CSC490), we've been tasked to create something that serves a social good.</p>
          <p>Our group aims to better control congestion throughout TTC subway services, creating a safer environment for commuters and operators alike.</p>
          
          <h1 style={{ textAlign: "center" }}>THE PROBLEM</h1>
          <p>To keep up with the sheer number of people taking the TTC every day, it's vital that trains are getting as many people as safely possible to their destinations.</p>
          <p>However, in its current state, it's incredibly difficult for trains to reach their maximum capacity.</p>
          <p>Commuters have no idea which train cars have room for them until the train arrives at the platform, at which point many do not have the time to reach emptier train cars.</p>
          <p>This leads to proportionally underutilized cars leaving stations and customers experiencing longer wait times as they wait for future trains.</p>

          <h1 style={{ textAlign: "center" }}>OUR SOLUTION</h1>
          <p>We would like to install a single camera on the platform level to capture the inside of subway cars as they leave the station.</p>
          <p>We'd then feed this data through an image recognition model to measure crowd densities on a per-car level, communicating these projections to commuters waiting for the train at the following station.</p>
          <p>We hope this gives customers ample time to adjust their location on the platform in preparation for the train, allowing the subway to be used most comfortably and effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
