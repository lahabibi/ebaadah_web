import Navbar from "../components/navbar";
import PrayerTimesHeader from "../components/prayerTimesHeader";
import WeekPrayerTime from "../components/weekPrayerTime";
import Footer from "../components/footer";
import PrayerTimesSeo from "../seo/prayerTimesSeo";

export default function PrayerTimes() {
  return (
    <>
      <PrayerTimesSeo />
      <Navbar />
      <main>
        <PrayerTimesHeader />
        <WeekPrayerTime />
      </main>
      <Footer />
    </>
  );
}
