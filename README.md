# Weather App

A simple, user-friendly weather application that provides current conditions, forecasts, and historical weather data for your chosen location.

[Live Demo on GitHub Pages](https://mgkdante.github.io/weather-app/)

## Features

- **Current Weather:** Displays temperature (Celsius/Fahrenheit), humidity, UV index, feels-like temperature, condition icon, and last update time.
- **Search:** Enter a city name to get weather information for that location.
- **Unit Toggle:** Easily switch between Celsius and Fahrenheit.
- **Background Image:** A dynamic background image complements the current weather condition.
- **Responsive Design:**  Adapts to various screen sizes (desktops, tablets, and mobile devices).

## Technologies Used

- **HTML:** Structure of the web page.
- **CSS:** Styling and visual presentation.
- **JavaScript:** Dynamic functionality (fetching data, updating UI, handling user interactions).
- **WeatherAPI:** Provides the weather data (you'll need to replace the placeholder API key with your own).

## Project Structure

- `index.html`: Main HTML file.
- `index.js`: Core JavaScript logic.
- `data.js`: Handles fetching and processing weather data.
- `style.css`: Styles for the application.
- `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`: Webpack configuration files for development and production.
- `background.png`: Background image for the app.

## Installation and Usage

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/mgkdante/weather-app.git](https://github.com/mgkdante/weather-app.git)

2. **Install Dependencies:**
    ```bash
    npm run install

3. **Get a WeatherAPI Key:**
   Sign up for a free account at https://www.weatherapi.com/
   Replace the placeholder apiKey in data.js with your actual WeatherAPI key.

4. **Start the Development Server:**
    ```Bash
    npm start