import React from "react";
import si1 from "../assets/images/ibadat-islamic-1.jpg";
import si2 from "../assets/images/ibadat-islamic-2.jpg";

export default function AboutUs() {
  return (
    <>
      <section className="gap welcome-to-ibadat">
        <div className="container">
          <div className="heading two">
            <p>A journey with the quran</p>
            <h2>Welcome To Ebaadah Islamic App For Muslims</h2>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="welcome-to-ibadat-established hoverimg">
                <h4>
                  <span>Established in</span> 2025
                </h4>
                <img src={si1} alt="women accurate prayer time" />
                <img
                  className="to-ibadat-img"
                  src={si2}
                  alt="boy accurate prayer time"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="islamic-history">
                <h4>Who We Are</h4>
                <p>
                  Ebaadah is a digital platform created to help Muslims stay
                  connected to their faith in their everyday lives. Whether it
                  is checking prayer times, reading the Quran, or receiving
                  reminders for daily acts of worship, Ebaadah is designed to be
                  a companion that encourages consistency and spiritual growth.
                </p>
                <h4>Who We do</h4>
                <ul className="list">
                  <li>
                    Provide accurate daily prayer times based on your
                    location{" "}
                  </li>
                  <li>
                    Offer a Quran reading experience with continuous verses{" "}
                  </li>
                  <li>Send prayer reminders and Adhan notifications </li>
                  <li>Help Muslims stay consistent in their daily worship </li>
                </ul>
                <a href="#" className="btn">
                  Get Our App Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
