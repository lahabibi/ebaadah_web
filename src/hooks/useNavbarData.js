import { useEffect, useState, useMemo } from "react";
import { getPrayerData } from "../services/prayerService";
import { getUserLocation } from "../utils/location";
import { getUserIPLocation } from "../services/locationService";

export function useNavbarData() {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [location, setLocation] = useState({ city: "", country: "" });

  useEffect(() => {
    const loadData = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const cached = localStorage.getItem("navbarData");

        if (cached) {
          const parsed = JSON.parse(cached);

          if (parsed.date === today) {
            setSunrise(parsed.sunrise || "");
            setSunset(parsed.sunset || "");
            setLocation(parsed.location || { city: "", country: "" });
            return;
          }
        }

        let lat, lon;
        let city = "";
        let country = "";

        try {
          const gpsLocation = await getUserLocation();
          lat = gpsLocation.lat;
          lon = gpsLocation.lon;
        } catch (err) {
          console.log("GPS failed, using IP location");
          const ipLocation = await getUserIPLocation();
          lat = ipLocation.latitude;
          lon = ipLocation.longitude;
          city = ipLocation.city || "";
          country = ipLocation.country || "";
        }

        const prayer = await getPrayerData(lat, lon);
        const sunriseTime = prayer?.timings?.Sunrise || "";
        const sunsetTime = prayer?.timings?.Sunset || "";

        if (!city || !country) {
          const ipLocation = await getUserIPLocation();
          city = ipLocation.city || "";
          country = ipLocation.country || "";
        }

        const locationData = { city, country };

        setSunrise(sunriseTime);
        setSunset(sunsetTime);
        setLocation(locationData);

        localStorage.setItem(
          "navbarData",
          JSON.stringify({
            sunrise: sunriseTime,
            sunset: sunsetTime,
            location: locationData,
            date: today,
          }),
        );
      } catch (err) {
        console.error("Navbar load error:", err);
      }
    };

    loadData();
  }, []);

  const formatTime = (time) => {
    if (!time || !time.includes(":")) return "00:00";

    const [hour, minute] = time.split(":");
    const h = Number(hour);
    if (Number.isNaN(h)) return "00:00";

    const ampm = h >= 12 ? "PM" : "AM";
    const newHour = h % 12 || 12;

    return `${newHour}:${minute} ${ampm}`;
  };

  const formattedSunrise = useMemo(() => formatTime(sunrise), [sunrise]);
  const formattedSunset = useMemo(() => formatTime(sunset), [sunset]);

  return { sunrise, sunset, formattedSunrise, formattedSunset, location };
}
