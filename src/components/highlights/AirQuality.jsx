import { useSelector } from "react-redux";
import { weathers } from "../../features/weather/weatherSlice";
import { PiWindBold } from "react-icons/pi";

const AirQuality = () => {
  const weather = useSelector(weathers)
  const airLevel = weather.current.air_quality['us-epa-index'];
  let airQuality;

  if(airLevel > 0 && airLevel <= 50){
    airQuality = <p className="airQuality">
      Good <PiWindBold color="green" />
    </p>
  } else if(airLevel > 50 && airLevel <= 100) {
    airQuality = <p className="airQuality">
      Moderate <PiWindBold color="yellow" />
    </p>
  } else if(airLevel > 100 && airLevel <= 150) {
    airQuality = <p className="airQuality">
      Unhealthy for Sensitive Groups <PiWindBold color="orange" />
    </p>
  } else if(airLevel > 150 && airLevel <= 200){
    airQuality = <p className="airQuality">
      Unhealthy<PiWindBold color="red" />
    </p>
  } else if(airLevel > 200 && airLevel <= 300){
    airQuality = <p className="airQuality">
      Very Unhealthy<PiWindBold color="purple" />
    </p>
  } else if(airLevel > 300 && airLevel <= 500){
    airQuality = <p className="airQuality">
      Hazardous<PiWindBold color="maroon" />
    </p>
  }
  return (
    <>
      <div className="air highlight-card">
        <p className="highlightTitle">Air Quality</p>
        <h2>{airLevel}</h2>
        {airQuality}
      </div>
    </>
  );
};

export default AirQuality;
