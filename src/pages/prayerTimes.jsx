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
import { Helmet } from "react-helmet";

export default function PrayerTimes() {
  return (
    <>
      <Helmet>
        {" "}
        <title>
          Prayer Times Today | Accurate Islamic Salah Times – Ebaadah
        </title>{" "}
        <meta
          name="description"
          content="View accurate Islamic prayer times for today including Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay updated with daily Adhan reminders using the Ebaadah app."
        />{" "}
        <meta
          name="keywords"
          content="prayer times today, islamic prayer times, salah times, adhan times today, muslim prayer schedule, fajr dhuhr asr maghrib isha times"
        />{" "}
        <meta name="robots" content="index, follow" />{" "}
        {/* Open Graph for social sharing */}{" "}
        <meta property="og:title" content="Prayer Times Today | Ebaadah" />{" "}
        <meta
          property="og:description"
          content="Check accurate prayer times and stay connected with daily Salah using Ebaadah."
        />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:url" content="https://ebaadah.com/prayer-times" />{" "}
        <meta
          property="og:image"
          content="https://ebaadah.com/images/prayer-times-preview.png"
        />{" "}
        {/* Twitter preview */}{" "}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta name="twitter:title" content="Prayer Times Today | Ebaadah" />{" "}
        <meta
          name="twitter:description"
          content="Stay updated with accurate Islamic prayer times and Adhan reminders."
        />{" "}
        <meta
          name="twitter:image"
          content="https://ebaadah.com/images/prayer-times-preview.png"
        />{" "}
        <link rel="canonical" href="https://ebaadah.com/prayer-times" />{" "}
      </Helmet>
      <Navbar />
      <PrayerTimesHeader />
      <WeekPrayerTime />
      <Footer />
    </>
  );
}
