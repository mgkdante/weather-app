// Encodes the city name
const encodeCity = (city) => {
    return city.split(' ').join('%')
}

// Fetches data from the API
const fetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch data with status ${response.status} ${response.statusText}`)
    }
    return await response.json()
}

// Processes the API response
const processResponse = (data, city) => {
    if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
        return data.results[0].geometry.location
    } else {
        throw new Error(`No location data available for the city ${city}.`)
    }
}

// Fetches the geocode for a city from the Google Maps API
const getCityGeoCode = async (city) => {
    const encodedCity = encodeCity(city)
    const APIKey = ''
    const data = await fetchData(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedCity}&key=${APIKey}`)
    return processResponse(data, city)
}

export {getCityGeoCode}