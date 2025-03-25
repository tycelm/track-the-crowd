import React, { useEffect, useState, useRef } from "react";
import timeStamps from "../components/Timestamp";
import { useNavigate } from "react-router-dom";

const Timeline = () => {
  const lineWidth = 110; // Subway line width
  const buttonSize = 110; // Circle size in px
  const [scrollLeftActive, setScrollLeftActive] = useState(false);
  const [scrollRightActive, setScrollRightActive] = useState(false);
  const [activeDesc, setActiveDesc] = useState(null); // For showing the description
  const [mobile, setMobile] = useState(false);
  const [enter, setEnter] = useState(true);
  const [instruct, setInstruct] = useState(false);
  const scrollContainerRef = useRef(null);

  const navigate = useNavigate();

  // TODO: make button larger when centre

  useEffect(() => {
    document.title = "Timeline";

    const screenWidth = window.innerWidth;

    if (screenWidth > 800) {
      setMobile(false);
    } else {
      setMobile(true);
    }

    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setEnter(false);
      setInstruct(true);
    }, 500);

    setTimeout(() => {
      setInstruct(false);
    }, 6200);
  }, []);

  useEffect(() => {
    let scrollInterval = null;
    const scrollSpeed = 50; // px per interval
    const intervalTime = 30; // ms

    if (!activeDesc && (scrollLeftActive || scrollRightActive)) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          if (scrollRightActive) {
            scrollContainerRef.current.scrollLeft += scrollSpeed;
          }
          if (scrollLeftActive) {
            scrollContainerRef.current.scrollLeft -= scrollSpeed;
          }
        }
      }, intervalTime);
    }
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [scrollLeftActive, scrollRightActive]);

  const buttonClick = (desc, pic) => {
    setActiveDesc({ desc, pic });
  };

  const handleReturn = () => {
    setEnter(true);
    setTimeout(() => {
      navigate("/track-the-crowd");
    }, 1200);
  };

  return (
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
          fontSize: "clamp(3vh,3vw, 3vw)",
          color: "white",
          textAlign: "center",
          userSelect: "none",
          transition: "transform 0.5s ease-in-out",
          transform: enter ? "translateX(75vw)" : "none",
        }}
      >
        <h1>Our Timeline</h1>
        <p>Scroll horizontally to learn more!</p>
        <button
          onClick={() => handleReturn()}
          onMouseOver={(e) => {
            e.currentTarget.style.fontSize = "2.5vw"; // Enlarged font size on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.fontSize = "2vw"; // Return to normal size
          }}
          style={{
            width: "fit-content",
            height: "7vh",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            color: "#ffcc00",
            fontSize: "clamp(3vh, 2vw, 3vw)",
            transition: "font-size 0.3s ease-in-out", // Smooth transition
          }}
        >
          Or click to go back ⬅️
        </button>
      </div>

      {activeDesc && (
        <div
          style={{
            maxHeight: "85vh",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            padding: "40px",
            backgroundColor: "#fff",
            color: "#333",
            boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
            borderRadius: "10px",
            zIndex: 100,
            textAlign: "left",
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setActiveDesc(null)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "2rem",
              backgroundColor: "#920092",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
          {activeDesc.pic && (
            <img
              style={{
                width: "100%", // Fit the image width inside the div
                maxHeight: "60vh", // Prevent the image from being too tall
                objectFit: "contain", // Ensure the whole image fits without cropping
                marginBottom: "20px",
              }}
              src={activeDesc.pic}
              alt={activeDesc.desc}
            ></img>
          )}
          <div
            style={{
              whiteSpace: "pre-wrap", // Preserves new lines and spaces
              lineHeight: "1.6", // Improves readability
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {activeDesc.desc}
          </div>
        </div>
      )}

      {/* Invisible Left Trigger */}
      <div
        onMouseEnter={() => setScrollLeftActive(true)}
        onMouseLeave={() => setScrollLeftActive(false)}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "15vw", // Adjust trigger width as needed
          height: "100vh",
          backgroundColor: "transparent",
          zIndex: 10,
        }}
      >
        {instruct && !mobile && (
          <div
            style={{
              position: "absolute",
              marginTop: "20vh",
              // marginLeft: "2vw",
              color: "#333",
              fontSize: "4vw",
              textAlign: "center",
              background: "#ddd",
              animation: "blink 3s infinite", // Blinking effect
              fontWeight: "bold",
              padding: "2vw",
              paddingLeft: 0,
            }}
          >
            HOVER TO MOVE LEFT
          </div>
        )}
      </div>

      {/* Invisible Right Trigger */}
      <div
        onMouseEnter={() => setScrollRightActive(true)}
        onMouseLeave={() => setScrollRightActive(false)}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "15vw", // Adjust trigger width as needed
          height: "100vh",
          backgroundColor: "transparent",
          // backgroundColor: "white",
          zIndex: 10,
        }}
      >
        {" "}
        {instruct && !mobile && (
          <div
            style={{
              position: "absolute",
              marginTop: "20vh",
              marginRight: "40vw",
              color: "#333",
              fontSize: "4vw",
              textAlign: "center",
              background: "#ddd",
              animation: "blink 3s infinite", // Blinking effect
              fontWeight: "bold",
              padding: "2vw",
            }}
          >
            HOVER TO MOVE RIGHT
          </div>
        )}
      </div>

      {/* inline css cuz im lazy */}
      <style>
        {`
            @keyframes blink {
              0% { opacity: 0; }
              50% { opacity: 0.7; }
              100% { opacity: 0; }
            }
          `}
      </style>

      {/* Line 4*/}
      <div
        style={{
          position: "absolute",
          top: "59.8vh", // Crosses the 3rd circle
          width: "100vw",
          height: lineWidth + 4,
          backgroundColor: "#920092",
          // borderRadius: `${lineWidth / 2}px`,
          zIndex: 0,
        }}
      />

      {/* Scrollable Wrapper: Fixed width, enables scrolling */}
      <div
        ref={scrollContainerRef}
        style={{
          position: "absolute",
          top: "60vh",
          width: "100vw", // Fixed to viewport width
          overflowX: "auto", // Enables horizontal scroll
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          height: "270px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          transition: "transform 0.5s ease-in-out",
          transform: enter ? "translateX(100vw)" : "none",
        }}
      >
        {/* Flex box for buttons*/}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: `calc(${timeStamps.length} * clamp(400px, 30vw, 30vw))`, //spacing between the buttons
            height: "110px",
            whiteSpace: "nowrap",
          }}
        >
          {/* Buttons */}
          {timeStamps.map((timeStamp, i) => (
            <div
              key={i}
              onClick={() => buttonClick(timeStamp.desc, timeStamp.pic)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 1,
              }}
              onMouseOver={(e) => {
                const circleElement = e.currentTarget.querySelector(".circle");
                circleElement.style.backgroundColor = "#fff346";
                circleElement.style.boxShadow = "0 0 15px #ffd11a";
                const labelElement = e.currentTarget.querySelector(".label");
                labelElement.style.fontSize = "clamp(4vh, 4vw, 20vw)";
              }}
              onMouseOut={(e) => {
                const circleElement = e.currentTarget.querySelector(".circle");
                circleElement.style.backgroundColor = "#fff";
                circleElement.style.boxShadow = "none";
                const labelElement = e.currentTarget.querySelector(".label");
                labelElement.style.fontSize = "clamp(4vh, 3vw, 20vw)";
              }}
            >
              <button
                className="label"
                style={{
                  height: `${buttonSize}px`,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  backgroundColor: "transparent",
                  top: "10vh",
                  marginTop: "2vh",
                  color: "white",
                  border: "none",
                  background: "transparent",
                  fontSize: "clamp(4vh, 3vw, 20vw)",
                  fontWeight: "bold",
                  transition: "font-size 0.3s",
                }}
              >
                {timeStamp.label}
              </button>{" "}
              <button
                className="circle"
                style={{
                  width: `${buttonSize}px`,
                  height: `${buttonSize}px`,
                  borderRadius: "50%",
                  border: `6px solid #000`,
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
