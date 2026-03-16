import React from "react";

import "../stylesheets/audioplayer.css";
import "../stylesheets/bootstrap.min.css";
import "../stylesheets/jquery.fancybox.min.css";
import "../stylesheets/nice-select.css";
import "../stylesheets/owl.carousel.min.css";
import "../stylesheets/owl.theme.default.min.css";
import "../stylesheets/responsive.css";
import "../stylesheets/style.css";
import Navbar from "../components/navbar";
import PrayerTimesHeader from "../components/prayerTimesHeader";
import WeekPrayerTime from "../components/weekPrayerTime";
import Footer from "../components/footer";

export default function PrayerTimes() {
  return (
    <>
      <Navbar />
      <PrayerTimesHeader />
      <WeekPrayerTime />
      <Footer />
    </>
  );
}
