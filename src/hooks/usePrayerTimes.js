import { useEffect, useMemo, useRef, useState } from "react";

import { getUserLocation } from "../utils/location";
import { getPrayerData } from "../services/prayerService";
import { getUserIPLocation } from "../services/locationService";
import {
  formatTime,
  PRAYER_CACHE_KEY,
  PRAYER_ORDER,
  getCountdownText,
  getNextPrayerDetails,
} from "../utils/prayerHelper";

export default function usePrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [hijriDate, setHijriDate] = useState("");
  const [nextPrayer, setNextPrayer] = useState("");
  const [nextPrayerTime, setNextPrayerTime] = useState("");
  const [countdown, setCountdown] = useState("");

  const countdownRef = useRef(null);

  useEffect(() => {
    const loadPrayerData = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const cachedData = localStorage.getItem(PRAYER_CACHE_KEY);

        if (cachedData) {
          const parsedCache = JSON.parse(cachedData);

          if (parsedCache.date === today) {
            setPrayerTimes(parsedCache.timings || {});
            setHijriDate(parsedCache.hijriDate || "");

            determineNextPrayer(parsedCache.timings || {});
            return;
          }
        }

        let lat;
        let lon;
        let city = "";
        let country = "";

        try {
          const gpsLocation = await getUserLocation();
          lat = gpsLocation.lat;
          lon = gpsLocation.lon;
        } catch (error) {
          const ipLocation = await getUserIPLocation();
          lat = ipLocation.latitude;
          lon = ipLocation.longitude;
          city = ipLocation.city || "";
          country = ipLocation.country || "";
        }

        const prayer = await getPrayerData(lat, lon);
        const timings = prayer.timings || {};

        if (!city || !country) {
          const ipLocation = await getUserIPLocation();
          city = ipLocation.city || "";
          country = ipLocation.country || "";
        }

        const locationData = { city, country };

        const hijri = prayer?.date?.hijri;
        const formattedHijriDate = hijri
          ? `${hijri.day} ${hijri.month.en} ${hijri.year}`
          : "";

        setPrayerTimes(timings);
        setHijriDate(formattedHijriDate);

        determineNextPrayer(timings);

        localStorage.setItem(
          PRAYER_CACHE_KEY,
          JSON.stringify({
            timings,
            hijriDate: formattedHijriDate,
            date: today,
            location: locationData,
          }),
        );
      } catch (err) {
        console.error("Prayer load error:", err);
      }
    };

    loadPrayerData();

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, []);

  const determineNextPrayer = (timings) => {
    const { nextPrayer, nextPrayerTime, targetTime } =
      getNextPrayerDetails(timings);

    setNextPrayer(nextPrayer);
    setNextPrayerTime(nextPrayerTime);

    if (targetTime) {
      startCountdown(targetTime);
    }
  };

  const startCountdown = (targetTime) => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }

    const updateCountdown = () => {
      const countdownText = getCountdownText(targetTime);

      setCountdown(countdownText);

      if (countdownText === "Starting...") {
        clearInterval(countdownRef.current);
      }
    };

    updateCountdown();
    countdownRef.current = setInterval(updateCountdown, 1000);
  };

  const prayerRows = useMemo(() => {
    return PRAYER_ORDER.map((prayer) => ({
      ...prayer,
      time: prayerTimes[prayer.key] || "",
      formattedTime: formatTime(prayerTimes[prayer.key] || ""),
      isActive: nextPrayer === prayer.key,
    }));
  }, [prayerTimes, nextPrayer]);

  return {
    prayerTimes,
    hijriDate,
    nextPrayer,
    nextPrayerTime,
    countdown,
    prayerRows,
  };
}
