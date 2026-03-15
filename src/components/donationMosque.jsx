import React from "react";
import msjid from "../assets/images/masjid.png";

export default function DonationMosque() {
  return (
    <>
      <section class="masjid" style={{ backgroundImage: `url(${msjid})` }}>
        <div class="container">
          <div class="row">
            <div class="masjid-text">
              <h3>
                Help ebaadah reach <span>Communities</span>
              </h3>
              <p>Your donations will help build more features for ebaadah.</p>
              <a href="#" class="btn">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
