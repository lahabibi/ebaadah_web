import React from "react";
import Navbar from "../components/navbar";
import HomePrayerTime from "../components/homePrayerTime";
import AboutUs from "../components/aboutUs";
import QuranQuote from "../components/quranQuote";
import DonationMosque from "../components/donationMosque";
import Footer from "../components/footer";
import AppFeature from "../components/appFeature";
import { Helmet } from "react-helmet";

import "../stylesheets/audioplayer.css";
import "../stylesheets/bootstrap.min.css";
import "../stylesheets/jquery.fancybox.min.css";
import "../stylesheets/nice-select.css";
import "../stylesheets/owl.carousel.min.css";
import "../stylesheets/owl.theme.default.min.css";
import "../stylesheets/responsive.css";
import "../stylesheets/style.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ebaadah – Islamic Prayer Times & Adhan Reminder App</title>

        <meta
          name="description"
          content="Ebaadah helps Muslims stay connected with daily prayer times, Adhan notifications, and Islamic reminders."
        />

        <meta
          name="keywords"
          content="prayer times app, adhan reminder app, islamic prayer app, muslim prayer reminder, quran prayer app, reading quran"
        />

        <meta property="og:title" content="Ebaadah App" />
        <meta
          property="og:description"
          content="Daily Islamic prayer reminders and Adhan alerts."
        />
      </Helmet>
      <Navbar />
      <HomePrayerTime />
      <AboutUs />
      <QuranQuote />
      <AppFeature />
      <DonationMosque />
      <Footer />
    </>
  );
}
