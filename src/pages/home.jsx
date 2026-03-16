import React from "react";
import Navbar from "../components/navbar";
import HomePrayerTime from "../components/homePrayerTime";
import AboutUs from "../components/aboutUs";
import QuranQuote from "../components/quranQuote";
import DonationMosque from "../components/donationMosque";
import Footer from "../components/footer";
import AppFeature from "../components/appFeature";

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
