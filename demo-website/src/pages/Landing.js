import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  // Fixed sizes for consistency
  const buttonSize = 110; // Circle size in px
  const lineWidth = 110; // Subway line width
  const leftPosition = "70vw";

  const [titleStat, setTitleStat] = useState({
    top: "28vh",
    padding: "1vw",
    paddingX: "3vw",
  });
  const [moveRight, setMoveRight] = useState(true);
  const [moveDown, setMoveDown] = useState(false);

  // Handle resizing to center the layout dynamically
  useEffect(() => {
    document.title = "Landing";
    setTimeout(() => {
      setMoveRight(false);
    }, 500);

    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1400) {
        setTitleStat({
          top: "28vh",
          padding: "1vw",
          paddingX: "3vw",
          fontBig: "7vw",
          fontSmall: "4vw",
          paddingFirst: "2vw",
          paddingSecond: "10vw",
          paddingThird: "7vw",
        });
      } else {
        setTitleStat({
          top: "1vh",
          padding: "1vw",
          paddingX: "1vw",
          fontBig: "5vw",
          fontSmall: "4vw",
          paddingFirst: "0vw",
          paddingSecond: "0vw",
          paddingThird: "0vw",
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Disable horizontal scrolling
    document.body.style.overflowX = "hidden";

    return () => {
      // Cleanup: Restore scrolling when component unmounts
      document.body.style.overflowX = "auto";
    };
  }, []);

  const handleTimelineClick = () => {
    setMoveRight(true);
    setTimeout(() => {
      navigate("/track-the-crowd/timeline");
    }, 1200);
  };

  const handleNavClick = (path) => {
    setMoveDown(true);
    setTimeout(() => {
      navigate(path);
    }, 1200);
  };

  const circles = [
    { label: "Overview", top: "20vh" },
    { label: "Demo", top: "40vh" },
    { label: "Timeline", top: "60vh", highlight: true },
    { label: "Contact", top: "80vh" },
  ];

  return (
    <div
      style={{
        transition: "transform 1s ease-in-out",
        transform: moveDown ? "translateY(-100vh)" : "none",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/landing.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "right center", // Right-aligned background
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: titleStat.top,
            color: "#fff",
            fontWeight: "bold",
            border: "solid",
            padding: titleStat.padding,
            paddingLeft: titleStat.paddingX,
            paddingRight: titleStat.paddingX,
            userSelect: "none",
            transition: "transform 1.2s ease-in-out",
            transform: moveRight ? "translateX(-100vw)" : "none",
            marginLeft: "8vw",
          }}
        >
          <div
            style={{
              paddingLeft: titleStat.paddingFirst,
              fontSize: titleStat.fontBig,
            }}
          >
            Track
          </div>
          <div
            style={{
              paddingLeft: titleStat.paddingSecond,
              fontSize: titleStat.fontSmall,
            }}
          >
            the
          </div>
          <div
            style={{
              paddingLeft: titleStat.paddingThird,
              fontSize: titleStat.fontBig,
            }}
          >
            Crowd
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: `calc(${leftPosition} - 3vw)`, // Move to center dynamically
            zIndex: 0,
            transition: "transform 1s ease-in-out",
            transform: moveRight ? "translateX(-100vw)" : "none",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/backgrounds/lineicon.png`}
            alt="line1icon"
          ></img>
        </div>

        {/* Line 1*/}
        <div
          style={{
            position: "absolute",
            left: `calc(${leftPosition} - 0.1vw)`, // Move to center dynamically
            top: "19.5vh",
            width: lineWidth + 4,
            height: "100vh",
            backgroundColor: "#ffcc00",
            borderRadius: `${lineWidth / 2}px`,
            zIndex: 0,
            boxShadow: "0 0 200px 5px #68560f",
            transition: "transform 1s ease-in-out",
            transform: moveRight ? "translateX(-100vw)" : "none",
          }}
        />

        {/* Circles and Labels */}
        {circles.map((circle, i) => (
          <div
            key={i}
            onMouseOver={(e) => {
              const circleElement = e.currentTarget.querySelector(".circle");
              circleElement.style.backgroundColor = "#fff346";
              circleElement.style.boxShadow = circle.highlight
                ? "0 0 0px 7px #ffeeab"
                : "0 0 15px #ffd11a";
              const labelElement = e.currentTarget.querySelector(".label");
              labelElement.style.fontSize = "clamp(6vh, 5vw, 20vw)";
            }}
            onMouseOut={(e) => {
              const circleElement = e.currentTarget.querySelector(".circle");
              circleElement.style.backgroundColor = "#fff";
              circleElement.style.boxShadow = circle.highlight
                ? "0 0 0px 7px #ffffff"
                : "none";
              const labelElement = e.currentTarget.querySelector(".label");
              labelElement.style.fontSize = "clamp(6vh, 4vw, 20vw)";
            }}
          >
            {/* Circle */}
            <button
              onClick={
                circle.label === "Timeline"
                  ? handleTimelineClick
                  : () =>
                      handleNavClick(
                        `/track-the-crowd/${circle.label.toLowerCase()}`
                      )
              }
              className="circle"
              style={{
                position: "absolute",
                left: `calc(${leftPosition} + 55px)`, // Always aligned on the line
                top: circle.top,
                width: `${buttonSize}px`,
                height: `${buttonSize}px`,
                borderRadius: "50%",
                border: `6px solid #000`,
                backgroundColor: "#fff",
                cursor: "pointer",
                boxShadow: circle.highlight ? "0 0 0px 7px #ffffff" : "none",
                zIndex: 1,
                transition: "transform 1s ease-in-out",
                transform: moveRight
                  ? "translateX(-100vw)"
                  : "translate(-50%, 0)",
              }}
            />

            {/* Label */}
            <button
              onClick={
                circle.label === "Timeline"
                  ? handleTimelineClick
                  : () =>
                      handleNavClick(
                        `/track-the-crowd/${circle.label.toLowerCase()}`
                      )
              }
              className="label"
              style={{
                position: "absolute",
                top: `calc(${circle.top} + 5vh)`,
                color: "#fff",
                fontSize: "clamp(6vh, 4vw, 20vw)",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                left: leftPosition,
                paddingRight: "2vw",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                transition: "transform 1s ease-in-out, font-size 0.3s",
                transform: moveRight
                  ? "translateX(-100vw)"
                  : "translate(-100%, -50%)",
              }}
              onMouseOver={(e) => {
                e.target.style.fontSize = "clamp(6vh, 5vw, 20vw)";
              }}
              onMouseOut={(e) => {
                e.target.style.fontSize = "clamp(6vh, 4vw, 20vw)";
              }}
            >
              {circle.label}
            </button>
          </div>
        ))}
      </div>

      {/* Line 4*/}
      <div
        style={{
          position: "absolute",
          top: "59.8vh", // Crosses the 3rd circle
          left: `${leftPosition}`,
          width: "110vw",
          height: lineWidth + 4,
          backgroundColor: "#920092",
          borderRadius: `${lineWidth / 2}px`,
          zIndex: 0,
          transition: "transform 0.85s ease-in-out",
          transform: moveRight ? "translateX(-75vw)" : "none",
        }}
      />
    </div>
  );
};

export default Landing;
