import axios from "axios";

export const getPrayerData = async (lat, lon) => {
  const response = await axios.get("https://api.aladhan.com/v1/timings", {
    params: {
      latitude: lat,
      longitude: lon,
      method: 2,
    },
  });

  return response.data.data;
};
