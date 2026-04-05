import React from "react";
import msjid from "../assets/images/masjid.png";

export default function DonationMosque() {
  return (
    <>
      <section className="masjid" style={{ backgroundImage: `url(${msjid})` }}>
        <div className="container">
          <div className="row">
            <div className="masjid-text">
              <h3>
                Help ebaadah reach <span>Communities</span>
              </h3>
              <p>Your donations will help build more features for ebaadah.</p>
              <a href="/stripe-donate" className="btn">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
