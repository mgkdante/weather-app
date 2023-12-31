// Encodes the city name
import {load} from "https://deno.land/std@0.210.0/dotenv/mod.ts";
const encodeCity = (city) => {
    return encodeURIComponent(city);
}

// Fetches data from the API
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data with status ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
}

// Processes the API response
const processResponse = (data, city) => {
    if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
        return data.results[0].geometry.location;
    } else {
        throw new Error(`No location data available for the city ${city}.`);
    }
}

// Fetches the geocode for a city from the Google Maps API
const getCityGeoCode = async (city) => {
    await load({export: true})
    const encodedCity = encodeCity(city);
    const APIKEY = Deno.env.get("GOOGLE_MAPS_API_KEY")
    const data = await fetchData(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedCity}&key=${APIKEY}`);
    return processResponse(data, city);
}

export {getCityGeoCode};