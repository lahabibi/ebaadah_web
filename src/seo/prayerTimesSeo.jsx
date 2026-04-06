import { Helmet } from "react-helmet-async";

export default function PrayerTimesSeo() {
  const title = "Prayer Times Today | Accurate Islamic Salah Times – Ebaadah";
  const description =
    "View accurate Islamic prayer times for today including Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay updated with daily Adhan reminders using the Ebaadah app.";
  const keywords =
    "prayer times today, islamic prayer times, salah times, adhan times today, muslim prayer schedule, fajr dhuhr asr maghrib isha times";
  const image = "/ebaadah-preview.png";
  const url = "https://ebaadah.com/";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />{" "}
      <meta property="og:title" content="Prayer Times Today | Ebaadah" />{" "}
      <meta
        property="og:description"
        content="Check accurate prayer times and stay connected with daily Salah using Ebaadah."
      />{" "}
      <meta property="og:type" content="website" />{" "}
      <meta property="og:url" content="https://ebaadah.com/prayer-times" />{" "}
      <meta property="og:image" content={image} />{" "}
      <meta name="twitter:card" content="summary_large_image" />{" "}
      <meta name="twitter:title" content="Prayer Times Today | Ebaadah" />{" "}
      <meta
        name="twitter:description"
        content="Stay updated with accurate Islamic prayer times and Adhan reminders."
      />{" "}
      <meta name="twitter:image" content={image} />{" "}
      <link rel="canonical" href="https://ebaadah.com/prayer-times" />{" "}
    </Helmet>
  );
}
