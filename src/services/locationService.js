import axios from "axios";

const API_KEY = process.env.REACT_APP_IPREGISTRY_KEY;
const IP_REGISTRY_BASE_URL = "https://api.ipregistry.co";

export const getUserIPLocation = async () => {
  if (!API_KEY) {
    throw new Error("Missing IP Registry API key.");
  }

  try {
    const response = await axios.get(IP_REGISTRY_BASE_URL, {
      params: {
        key: API_KEY,
      },
      timeout: 10000,
    });

    const data = response?.data;

    return {
      city: data?.location?.city || "",
      country: data?.location?.country.name || "",
      latitude: data?.location?.latitude || null,
      longitude: data?.location?.longitude || null,
    };
  } catch (error) {
    throw new Error("Failed to fetch location from IP.");
  }
};
