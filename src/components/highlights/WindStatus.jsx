import { ImLocation } from "react-icons/im";
import { useSelector } from "react-redux";
import { weathers } from "../../features/weather/weatherSlice";

const WindStatus = () => {
  const weather = useSelector(weathers);
  const windStatus = weather.current.wind_kph;
  const windDirection = weather.current.wind_dir;
  return (
    <>
      <div className="wind highlight-card">
        <p className="highlightTitle">Wind Status</p>
        <h2>
          {windStatus} <span>km/h</span>
        </h2>
        <p
          style={{
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <ImLocation className="windIcon" /> {windDirection}
        </p>
      </div>
    </>
  );
};

export default WindStatus;
