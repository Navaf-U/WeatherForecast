import { useState } from "react";
import { useGetWeatherQuery } from "./apis/WeatherApi";
import Locations from "./components/Locations"; 

function ShowData() {
  const [state, setState] = useState("kerala");
  const [district, setDistrict] = useState(Locations[state][0]);
  
  const { data, isFetching } = useGetWeatherQuery(`${district},${state}`);
  
  if (isFetching) return "Loading...";
  if (!data) return "No data available";

  const { current, location: locationData } = data;

  // Update district list when state changes
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setDistrict(Locations[selectedState][0]);
  };

  return (
    <div>
      <h2 className="text-center text-[30px] font-bold">
        Weather Data for {locationData?.name}
      </h2>

      {/* State Selector */}
      <label htmlFor="state">Select State:</label>
      <select id="state" value={state} onChange={handleStateChange}>
        {Object.keys(Locations).map((stateName) => (
          <option key={stateName} value={stateName}>
            {stateName.charAt(0).toUpperCase() + stateName.slice(1)}
          </option>
        ))}
      </select>

      {/* District Selector */}
      <label htmlFor="district">Select District:</label>
      <select
        id="district"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      >
        {Locations[state].map((districtName) => (
          <option key={districtName} value={districtName}>
            {districtName}
          </option>
        ))}
      </select>

      {/* Weather Data */}
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
