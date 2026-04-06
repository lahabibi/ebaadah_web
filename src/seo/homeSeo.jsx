import React from "react";
import { Helmet } from "react-helmet-async";

export default function HomeSeo({
  title = "Ebaadah – Islamic Prayer Times & Adhan Reminder App",
  description = "Ebaadah helps Muslims stay connected with daily prayer times, Adhan notifications, and Islamic reminders.",
  keywords = "prayer times app, adhan reminder app, islamic prayer app, muslim prayer reminder, quran prayer app, reading quran",
  image = "/ebaadah-preview.png",
  url = "https://ebaadah.com/",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
