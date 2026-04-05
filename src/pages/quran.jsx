import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Quran() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            maxWidth: "700px",
            width: "100%",
          }}
        >
          {/* Animation */}
          {/* <Lottie animationData={successAnimation} style={{ height: 150 }} /> */}

          <h2 style={{ color: "#24965E", marginTop: "10px" }}>
            The quran section is being worked on!
          </h2>
          <br />
          <br />
          {/* 
        <p style={{ color: "#555", margin: "15px 0" }}>
          Thank you for supporting Ebaadah. Your contribution means a lot 💖
        </p> */}

          {/* <button
            onClick={() => navigate("/")}
            style={{
              background: "#24965E",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontWeight: "bold",
            }}
          >
            Back to Home
          </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
