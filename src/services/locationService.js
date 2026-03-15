import axios from "axios";

const API_KEY = process.env.REACT_APP_IPREGISTRY_KEY;

export const getUserIPLocation = async () => {
  const res = await axios.get(`https://api.ipregistry.co/?key=${API_KEY}`);

  const data = res.data;

  return {
    city: data.location.city,
    country: data.location.country.name,
    latitude: data.location.latitude,
    longitude: data.location.longitude,
  };
};
