import React, { useState, useEffect } from "react";
import gallerybg from "../assets/images/gallery-bg.jpg";
import ayatImg from "../assets/images/ayat-two.png";

export default function QuranQuote() {
  const quotes = [
    {
      text: "O you who have believed, Seek help through patience and prayers.",
      ref: "Al-Baqarah (2): 153",
    },
    // { text: "Indeed, Allah is with the patient.", ref: "Al-Baqarah (9): 153" },
    // { text: "Verily, with hardship comes ease.", ref: "Al-Inshirah (94): 6" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000); // change quote every 5 seconds
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section
      className="gap gallery no-bottom"
      style={{
        position: "relative",
        backgroundImage: `url(${gallerybg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Transparent overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(2, 125, 59, 0.4)", // green with 40% opacity
          zIndex: 1,
        }}
      ></div>

      {/* Content on top */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="slider-ayat two">
          <div className="ayat item" key={current}>
            <img src={ayatImg} alt="ayat" />
            <h4>{quotes[current].text}</h4>
            <h5>{quotes[current].ref}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
