import { useState } from "react";
import { useGetWeatherQuery } from "./apis/WeatherApi";

function ShowData() {
    const [location, setLocation] = useState("kerala");
    const { data, isFetching } = useGetWeatherQuery(`india,${location}`);
  
    if (isFetching) return "Loading...";
    if (!data) return "No data available";
    const { current, location: locationData } = data;
  
    return (
      <div>
        
        <h2>Weather Data for {locationData?.name}</h2>
        
        <select
          onChange={(e) => setLocation(e.target.value)}
          defaultValue={location}
        >
          <option value="mumbai">Mumbai</option>
          <option value="kerala">Kerala</option>
          <option value="kolkata">Kolkata</option>
          <option value="hydrabad">Hyderabad</option>
          <option value="tamilnadu">Tamil Nadu</option>
        </select>
        <div>
          <h3>Location Details:</h3>
          <p><strong>City:</strong> {locationData?.name}</p>
          <p><strong>Region:</strong> {locationData?.region}</p>
          <p><strong>Country:</strong> {locationData?.country}</p>
          <p><strong>Local Time:</strong> {locationData?.localtime}</p>
        </div>
        <div>
          <h3>Current Weather:</h3>
          <p><strong>Temperature:</strong> {current?.temp_c} °C / {current?.temp_f} °F</p>
          <p><strong>Condition:</strong> {current?.condition?.text}</p>
          <p><strong>Wind:</strong> {current?.wind_kph} kph, Direction: {current?.wind_dir}</p>
          <p><strong>Humidity:</strong> {current?.humidity} %</p>
          <p><strong>Cloud Cover:</strong> {current?.cloud} %</p>
          <p><strong>UV Index:</strong> {current?.uv}</p>
          <p><strong>Visibility:</strong> {current?.vis_km} km</p>
          <p><strong>Last Updated:</strong> {current?.last_updated}</p>
        </div>
      </div>
    );
  }

export default ShowData;
