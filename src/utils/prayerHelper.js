export const PRAYER_CACHE_KEY = "prayerData";

export const PRAYER_ORDER = [
  { key: "Fajr", label: "Fajr" },
  { key: "Dhuhr", label: "Zuhr" },
  { key: "Asr", label: "Asr" },
  { key: "Maghrib", label: "Maghrib" },
  { key: "Isha", label: "Isha" },
];

export const formatTime = (time) => {
  if (!time || !time.includes(":")) return "";

  const [hour, minute] = time.split(":");
  const parsedHour = Number(hour);

  if (Number.isNaN(parsedHour)) return "";

  const ampm = parsedHour >= 12 ? "PM" : "AM";
  const formattedHour = parsedHour % 12 || 12;

  return `${formattedHour}:${minute} ${ampm}`;
};

export const getNextPrayerDetails = (timings) => {
  if (!timings) {
    return {
      nextPrayer: "",
      nextPrayerTime: "",
      targetTime: null,
    };
  }

  const now = new Date();

  for (const prayer of PRAYER_ORDER) {
    const prayerTimeString = timings[prayer.key];

    if (!prayerTimeString || !prayerTimeString.includes(":")) continue;

    const [hour, minute] = prayerTimeString.split(":").map(Number);

    const prayerTime = new Date();
    prayerTime.setHours(hour, minute, 0, 0);

    if (prayerTime > now) {
      return {
        nextPrayer: prayer.key,
        nextPrayerTime: prayerTimeString,
        targetTime: prayerTime,
      };
    }
  }

  const fajrTime = timings.Fajr;

  if (fajrTime && fajrTime.includes(":")) {
    const [hour, minute] = fajrTime.split(":").map(Number);

    const fajrTomorrow = new Date();
    fajrTomorrow.setDate(fajrTomorrow.getDate() + 1);
    fajrTomorrow.setHours(hour, minute, 0, 0);

    return {
      nextPrayer: "Fajr",
      nextPrayerTime: fajrTime,
      targetTime: fajrTomorrow,
    };
  }

  return {
    nextPrayer: "",
    nextPrayerTime: "",
    targetTime: null,
  };
};

export const getCountdownText = (targetTime) => {
  if (!targetTime) return "";

  const now = new Date();
  const diff = targetTime - now;

  if (diff <= 0) return "Starting...";

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const hLabel = hours === 1 ? "hour" : "hours";
  const mLabel = minutes === 1 ? "minute" : "minutes";
  const sLabel = seconds === 1 ? "second" : "seconds";

  return `${hours} ${hLabel} ${minutes} ${mLabel} ${seconds} ${sLabel}`;
};
