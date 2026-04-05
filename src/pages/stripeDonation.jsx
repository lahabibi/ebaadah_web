import React from "react";
import DonationFormWrapper from "../components/donationForm";
import Navbar from "../components/navbar";

export default function StripeDonation() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* <h1 style={{ color: "#24965E", marginBottom: "10px" }}>
          Support the Ebaadah Team
        </h1> */}
        <p>
          Help us grow Ebaadah and provide better Islamic tools for the
          community.
        </p>
        <br />
        <DonationFormWrapper />
      </div>
    </>
  );
}
