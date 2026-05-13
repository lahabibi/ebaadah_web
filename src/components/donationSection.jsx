import React from "react";
import bg from "../assets/images/color-bg.jpg";
import hq from "../assets/images/holy-quran.jpg";
import charity from "../assets/images/charity.png";

export default function DonationSection() {
  return (
    <>
      <br />
      <br />
      <section
        className="listen-holy"
        style={{ backgroundImage: `url(${hq})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading two">
                <p>Your Daily Ebaadah</p>
                <h2>A Journey With The Quran.</h2>
                <h6>
                  Ebaadah’s mission is to continuously enhance Quran features to
                  make reading, understanding, and studying the Quran simple and
                  accessible for everyone. By combining thoughtful design with
                  meaningful technology, Ebaadah aims to remove barriers and
                  create a smooth, engaging experience for users of all levels.
                  The goal is to support daily connection with the Quran through
                  tools that are intuitive, reliable, and spiritually enriching.
                </h6>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div
                className="support-us"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <h4>Support Ebaadah, reach communities.</h4>
                <div className="progressbar">
                  <img
                    src={charity}
                    height={200}
                    width={220}
                    alt="ebaadah charity "
                  />
                </div>
                <br />
                <p style={{ color: "#fff" }}>
                  Help us grow Ebaadah and provide better Islamic tools for the
                  community.
                </p>
                <br />
                <a
                  href="/stripe-donate"
                  className="btn"
                  style={{ backgroundColor: "#fbc509" }}
                >
                  Support The App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
