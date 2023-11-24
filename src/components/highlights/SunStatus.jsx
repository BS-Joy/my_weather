import { IoArrowUpCircleSharp } from "react-icons/io5";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { weathers } from "../../features/weather/weatherSlice";

const SunStatus = () => {
  const weather = useSelector(weathers)
  const sunRise = weather.forecast.forecastday[0].astro.sunrise;
  const sunSet = weather.forecast.forecastday[0].astro.sunset;
  return (
    <>
      <div className="sun highlight-card">
        <p className="highlightTitle">sunrise & sunset</p>
        <div className="daytime">
          <div className="sunrise">
            <IoArrowUpCircleSharp
              color="rgb(255, 230, 0)"
              size={"1.8rem"}
              className="daytimeIcons"
            />
            <p>{sunRise}</p>
          </div>
          <div className="sunset">
            <IoArrowDownCircleSharp
              color="rgb(255, 230, 0)"
              size={"1.8rem"}
              className="daytimeIcons"
            />
            <p>{sunSet}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SunStatus;
