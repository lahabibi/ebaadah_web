import React from "react";

import HomeSeo from "../seo/homeSeo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutUs from "../components/aboutUs";
import QuranQuote from "../components/quranQuote";
import AppFeature from "../components/appFeature";
import DonationMosque from "../components/donationMosque";
import HomePrayerTime from "../components/homePrayerTime";

export default function Home() {
  return (
    <>
      <HomeSeo />
      <Navbar />
      <main>
        <HomePrayerTime />
        <AboutUs />
        <QuranQuote />
        <AppFeature />
        <DonationMosque />
      </main>
      <Footer />
    </>
  );
}
