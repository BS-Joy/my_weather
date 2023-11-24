import { useSelector } from "react-redux";
import { weathers } from "../../features/weather/weatherSlice";

const Visibility = () => {
  const weather = useSelector(weathers);
  const visibility = weather.current.vis_km;
  const visibilityStatus = weather.current.condition.text
  return (
    <>
      <div className="visibility highlight-card">
        <p className="highlightTitle">Visibility</p>
        <h2>{visibility} km</h2>
        <p className="visCondition">{visibilityStatus}</p>
      </div>
    </>
  );
};

export default Visibility;
