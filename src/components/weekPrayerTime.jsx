import React, { useEffect, useState } from "react";
import bg from "../assets/images/background-navigating.jpg";
import colorbg from "../assets/images/color-bg.jpg";
import j1 from "../assets/images/join-our-1.jpg";
import j2 from "../assets/images/join-our-2.jpg";
import j3 from "../assets/images/join-our-3.jpg";
import j4 from "../assets/images/join-our-4.jpg";

import { getUserLocation } from "../utils/location";
import { getUserIPLocation } from "../services/locationService";

export default function WeekPrayerTime() {
  const [weeklyTimes, setWeeklyTimes] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    const loadWeekPrayer = async () => {
      const cached = localStorage.getItem("prayerData");

      if (cached) {
        const parsed = JSON.parse(cached);
        setCity(parsed?.location?.city);
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

      await getWeeklyPrayerTimes(lat, lon);
    };
    loadWeekPrayer();
  }, []);

  const getWeeklyPrayerTimes = async (lat, lon) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const cacheKey = `weekly_prayer_${year}_${month}`;

    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      const parsed = JSON.parse(cached);

      // ensure cache still contains today's date
      const todayIndex = today.getDate() - 1;
      const week = parsed.slice(todayIndex, todayIndex + 7);

      setWeeklyTimes(week);
      return;
    }

    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=2&month=${month}&year=${year}`,
      );

      const data = await res.json();

      localStorage.setItem(cacheKey, JSON.stringify(data.data));

      const todayIndex = today.getDate() - 1;
      const week = data.data.slice(todayIndex, todayIndex + 7);

      setWeeklyTimes(week);
    } catch (err) {
      console.error("Weekly prayer fetch error", err);
    }
  };

  return (
    <>
      <section style={{ backgroundImage: `url(${bg})` }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          {city ? (
            <h2>Prayer Time in {city} This Week</h2>
          ) : (
            <h2>Prayer Times This Week</h2>
          )}
        </center>
        <div className="prayer-week-card" style={{ margin: "60px" }}>
          <table className="prayer-week-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Fajr</th>
                <th>Dhuhr</th>
                <th>Asr</th>
                <th>Maghrib</th>
                <th>Isha</th>
              </tr>
            </thead>

            <tbody>
              {weeklyTimes.map((day, index) => (
                <tr key={index} className={index === 0 ? "today-row" : ""}>
                  <td>{day.date.gregorian.weekday.en}</td>
                  <td>{day.timings.Fajr.split(" ")[0]}</td>
                  <td>{day.timings.Dhuhr.split(" ")[0]}</td>
                  <td>{day.timings.Asr.split(" ")[0]}</td>
                  <td>{day.timings.Maghrib.split(" ")[0]}</td>
                  <td>{day.timings.Isha.split(" ")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section class="gap">
        <div class="container">
          <div
            class="join-our-community"
            style={{ backgroundImage: `url(${colorbg})` }}
          >
            <h2>Serving the Umma, working in partnership</h2>
            <p>
              We believe that our primary role is to serve the needs of the
              local community
            </p>
            <a href="#" class="btn">
              Get Our App Soon
            </a>
            <div class="join-our-img">
              <img src={j1} alt="img" />
              <img src={j2} alt="img" />
              <img src={j3} alt="img" />
              <img src={j4} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
