import React, { useState, useEffect, useRef } from "react";
import backImg from "../assets/images/hero-img-2.jpg";
import man from "../assets/images/ayat-with-man.png";
import playstore from "../assets/images/playstore.png";
import applelogo from "../assets/images/apple-logo.png";

import { getPrayerData } from "../services/prayerService";
import { getUserLocation } from "../utils/location";
import { getUserIPLocation } from "../services/locationService";

export default function HomePrayerTime() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [hijriDate, setHijriDate] = useState("");
  const [nextPrayer, setNextPrayer] = useState("");
  const [nextPrayerTime, setNextPrayerTime] = useState("");
  const [countdown, setCountdown] = useState("");
  const [, setLocation] = useState("");

  const countdownRef = useRef(null);

  useEffect(() => {
    const loadPrayer = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];

        const cached = localStorage.getItem("prayerData");

        if (cached) {
          const parsed = JSON.parse(cached);

          if (parsed.date === today) {
            setPrayerTimes(parsed.timings);
            setHijriDate(parsed.hijriDate);
            setLocation(parsed.location);

            determineNextPrayer(parsed.timings);

            return;
          }
        }

        let lat, lon, city, country;

        try {
          const loc = await getUserLocation();
          lat = loc.lat;
          lon = loc.lon;
        } catch {
          const ip = await getUserIPLocation();
          lat = ip.latitude;
          lon = ip.longitude;
          city = ip.city;
          country = ip.country;
        }

        const prayer = await getPrayerData(lat, lon);

        const timings = prayer.timings;

        // If city not already fetched
        if (!city) {
          const ip = await getUserIPLocation();
          city = ip.city;
          country = ip.country;
        }

        const locationData = { city, country };

        const hijri = prayer.date.hijri;
        const hijriFormatted = `${hijri.day} ${hijri.month.en} ${hijri.year}`;

        setPrayerTimes(timings);
        setHijriDate(hijriFormatted);
        setLocation(locationData);

        determineNextPrayer(timings);

        localStorage.setItem(
          "prayerData",
          JSON.stringify({
            timings,
            hijriDate: hijriFormatted,
            date: today,
            location: locationData,
          }),
        );
      } catch (err) {
        console.error("Prayer load error:", err);
      }
    };

    loadPrayer();
  }, []);

  const determineNextPrayer = (timings) => {
    if (!timings) return;
    const now = new Date();

    const prayers = [
      { name: "Fajr", time: timings.Fajr },
      { name: "Dhuhr", time: timings.Dhuhr },
      { name: "Asr", time: timings.Asr },
      { name: "Maghrib", time: timings.Maghrib },
      { name: "Isha", time: timings.Isha },
    ];

    for (let p of prayers) {
      const [h, m] = p.time?.split(":");

      const prayerTime = new Date();
      prayerTime.setHours(h);
      prayerTime.setMinutes(m);
      prayerTime.setSeconds(0);

      if (prayerTime > now) {
        setNextPrayer(p.name);
        setNextPrayerTime(p.time);

        startCountdown(prayerTime);

        return;
      }
    }

    // If all prayers passed → next is tomorrow Fajr
    const [h, m] = timings.Fajr?.split(":");

    const fajrTomorrow = new Date();
    fajrTomorrow.setDate(fajrTomorrow.getDate() + 1);
    fajrTomorrow.setHours(h);
    fajrTomorrow.setMinutes(m);

    setNextPrayer("Fajr");
    setNextPrayerTime(timings.Fajr);

    startCountdown(fajrTomorrow);
  };

  const startCountdown = (targetTime) => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }

    const updateCountdown = () => {
      const now = new Date();

      const diff = targetTime - now;

      if (diff <= 0) {
        setCountdown("Starting...");
        clearInterval(countdownRef.current);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const hLabel = hours < 2 ? "hour" : "hours";
      const mLabel = minutes < 2 ? "minute" : "minutes";
      const sLabel = seconds < 2 ? "second" : "seconds";

      setCountdown(
        `${hours} ${hLabel} ${minutes} ${mLabel} ${seconds} ${sLabel}`,
      );
    };

    updateCountdown();

    countdownRef.current = setInterval(updateCountdown, 1000);
  };

  const formatTime = (time) => {
    if (!time) return "";
    const [hour, minute] = time?.split(":");
    const h = Number(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    const newHour = h % 12 || 12;
    return `${newHour}:${minute} ${ampm}`;
  };

  return (
    <>
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
                  O you who have believed, seek help through patience and
                  prayer. Indeed, Allāh is with the patient.
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
                    <li
                      className={`timing-date ${
                        nextPrayer === "Fajr" ? "active-prayer" : ""
                      }`}
                    >
                      <span>Fajr</span>
                      <span>{formatTime(prayerTimes.Fajr)}</span>
                      <span>{formatTime(prayerTimes.Fajr)}</span>
                    </li>
                    <li
                      className={`timing-date ${
                        nextPrayer === "Dhuhr" ? "active-prayer" : ""
                      }`}
                    >
                      <span>Zuhr</span>
                      <span>{formatTime(prayerTimes.Dhuhr)}</span>
                      <span>{formatTime(prayerTimes.Dhuhr)}</span>
                    </li>
                    <li
                      className={`timing-date ${
                        nextPrayer === "Asr" ? "active-prayer" : ""
                      }`}
                    >
                      <span>Asr</span>
                      <span>{formatTime(prayerTimes.Asr)}</span>
                      <span>{formatTime(prayerTimes.Asr)}</span>
                    </li>
                    <li
                      className={`timing-date ${
                        nextPrayer === "Maghrib" ? "active-prayer" : ""
                      }`}
                    >
                      <span>Maghrib</span>
                      <span>{formatTime(prayerTimes.Maghrib)}</span>
                      <span>{formatTime(prayerTimes.Maghrib)}</span>
                    </li>
                    <li
                      className={`timing-date ${
                        nextPrayer === "Isha" ? "active-prayer" : ""
                      }`}
                    >
                      <span>Isha</span>
                      <span>{formatTime(prayerTimes.Isha)}</span>
                      <span>{formatTime(prayerTimes.Isha)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
