import React from "react";
import program from "../assets/images/program.png";
import screen from "../assets/images/ebaadah-quran-app.png";
import salat from "../assets/images/salat.jpeg";
import clock from "../assets/images/clock.png";
import qurr from "../assets/images/qurr.jpeg";
import mosq from "../assets/images/mosq.jpg";
import adhan from "../assets/images/adhan.png";
import koran from "../assets/images/koran.png";

export default function AppFeature() {
  return (
    <>
      <section
        className="gap program"
        style={{ backgroundImage: `url(${program})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="program-img">
                <img
                  src={screen}
                  width={500}
                  height={650}
                  alt="ebaadah quran app & salaat reminder notification"
                />
                {/* <div className="program-time">
                  <i className="fa-regular fa-clock"></i>
                  <h5>
                    26th Jumada-Al-Thani, 1445 Mon,
                    <span>8th Jan, 2024 - London, UK</span>
                  </h5>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading two">
                <p>App Main Features</p>
                <h2>Your Daily Ebaadah</h2>
              </div>
              <div className="courses-two">
                <img src={salat} alt="adhan notification" />
                <div>
                  <ul>
                    <li>Location Based Time</li>
                    <li>Notification</li>
                    {/* <li>Reminder</li> */}
                  </ul>
                  <a href="#">Accurate Prayer Times</a>
                  <div className="scholar-two">
                    <img src={clock} alt="accurate prayer time worldwide" />
                    <h4>
                      Don't Miss A <span>Salaat</span>
                    </h4>
                  </div>
                </div>
                <h6>FREEMIUM</h6>
              </div>
              <div className="courses-two">
                <img src={qurr} alt="reading quran" />
                <div>
                  <ul>
                    <li>Last Read Feature</li>

                    <li>Clean Uthmani Mushaf</li>
                  </ul>
                  <a href="#">Your Quran Everywhere</a>
                  <div className="scholar-two">
                    <img src={koran} alt="ebaadah app" />
                    <h4>
                      Connect With The Quran <span>Daily</span>
                    </h4>
                  </div>
                </div>
                <h6>FREEMIUM</h6>
              </div>
              <div className="courses-two mb-0">
                <img src={mosq} alt="salaat app" />
                <div>
                  <ul>
                    <li>Adhan</li>
                    <li>Notification</li>
                    <li>Reminder</li>
                  </ul>
                  <a href="#">5 Daily Prayers Adhan</a>
                  <div className="scholar-two">
                    <img src={adhan} alt="adhan notification" />
                    <h4>
                      Be Reminded Of Salaat With <span>Adhan</span>
                    </h4>
                  </div>
                </div>
                <h6>FREEMIUM</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
