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
          <h1 style={{ textAlign: "center" }}>CONTACT</h1>
          <p>
            Connect with our group:
            <div>
              <a
                style={{ color: "#D0251D" }}
                href="https://www.linkedin.com/in/jin-lina/"
                target="_blank"
              >
                Lina Jin
              </a>
            </div>
            <div>
              <a
                style={{ color: "#D0251D" }}
                href="https://www.linkedin.com/in/noelle-akira-ransom/"
                target="_blank"
              >
                Noelle Ransom
              </a>
            </div>
            <div>
              <a
                style={{ color: "#D0251D" }}
                href="https://www.linkedin.com/in/ming-hin-joshua-li-99a0a0231/"
                target="_blank"
              >
                Joshua Li
              </a>
            </div>
            <div>
              <a
                style={{ color: "#D0251D" }}
                href="https://www.linkedin.com/in/maksym-woychyshyn-a14836197/"
                target="_blank"
              >
                Max Woychyshyn
              </a>
            </div>
          </p>
          <p>
            If you're interested in our project between now and the end of April
            2025, please don't hesitate to reach out to us!
            <div>
              <a
                style={{ color: "#D0251D" }}
                href="mailto:lina.jin@mail.utoronto.ca;noelle.ransom@mail.utoronto.ca;minghinjoshua.li@mail.utoronto.ca;m.woychyshyn@mail.utoronto.ca"
              >
                Send us an email!
              </a>
            </div>
          </p>
          <h1 style={{ textAlign: "center" }}>PAST PRESENTATION MATERIALS</h1>
          <a
            style={{ color: "#D0251D" }}
            href="https://www.canva.com/design/DAGheX3qJbw/0CwghlaoyjnsDGj5C_BGcQ/edit?utm_content=DAGheX3qJbw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          >
            Presentation for the TTC
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
