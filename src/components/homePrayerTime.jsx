import man from "../assets/images/ayat-with-man.png";
import backImg from "../assets/images/hero-img-2.jpg";
import playstore from "../assets/images/playstore.png";
import applelogo from "../assets/images/apple-logo.png";

import usePrayerTimes from "../hooks/usePrayerTimes";
import { formatTime } from "../utils/prayerHelper";

export default function HomePrayerTime() {
  const { hijriDate, nextPrayer, nextPrayerTime, countdown, prayerRows } =
    usePrayerTimes();

  return (
    <div
      className="hero-section two"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1>For indeed, with hardship will be ease.</h1>
              <p>
                O you who have believed, seek help through patience and prayer.
                Indeed, Allāh is with the patient.
              </p>
              <div className="store-buttons">
                <a
                  href="#"
                  className="btn appstore-btn"
                  style={{ backgroundColor: "#fbc509" }}
                >
                  <img
                    src={applelogo}
                    width={30}
                    height={30}
                    alt="download adhan reminder app ios"
                  />
                  Soon on AppStore
                </a>
                {"  "}
                <a
                  href="#"
                  className="btn playstore-btn"
                  style={{
                    backgroundColor: "#027d3b",
                  }}
                >
                  <img
                    src={playstore}
                    width={30}
                    height={30}
                    alt="download accurate prayer time app android"
                  />{" "}
                  Soon on PlayStore
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img two">
              <img src={man} alt="man worshiping at the right prayer time" />
              <div className="namaz-timing-schedule">
                <div className="namaz-timing-date">
                  <h4>{hijriDate}</h4>
                  <span>Next Prayer: {nextPrayer}</span>
                  <h3>{formatTime(nextPrayerTime)}</h3>
                  <span>{countdown}</span>
                </div>
                <ul className="namaz-timing-two">
                  <li className="namaz-timing-heading">
                    <span>Prayer</span>
                    <span>Begins</span>
                    <span>Jama’ah</span>
                  </li>
                  {prayerRows.map((prayer) => (
                    <li
                      key={prayer.key}
                      className={`timing-date ${prayer.isActive ? "active-prayer" : ""}`}
                    >
                      <span>{prayer.label}</span>
                      <span>{prayer.formattedTime}</span>
                      <span>{prayer.formattedTime}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
