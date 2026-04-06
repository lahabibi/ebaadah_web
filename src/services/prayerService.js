import axios from "axios";

const PRAYER_API_BASE_URL = "https://api.aladhan.com/v1";
const DEFAULT_CALCULATION_METHOD = 2;

export const getPrayerData = async (latitude, longitude) => {
  if (latitude == null || longitude == null) {
    throw new Error(
      "Latitude and longitude are required to fetch prayer data.",
    );
  }

  try {
    const response = await axios.get(`${PRAYER_API_BASE_URL}/timings`, {
      params: {
        latitude,
        longitude,
        method: DEFAULT_CALCULATION_METHOD,
      },
      timeout: 10000,
    });
    return response?.data?.data || null;
  } catch (error) {
    throw new Error("Failed to fetch prayer times.");
  }
};
