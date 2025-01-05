import { useSelector } from "react-redux";
import { weathers } from "../../features/weather/weatherSlice";
import { FcApproval } from "react-icons/fc";
import { BsMoisture } from "react-icons/bs";
import { MdOutlineWhatshot } from "react-icons/md";

const Humidity = () => {
  const weather = useSelector(weathers);
  const humidity = weather.current.humidity;
  let humiCondition;
  if(humidity >= 30 && humidity <= 50){
    humiCondition = <p className="humiCondition">
        Normal <FcApproval />
      </p>
  } else if(humidity < 30) {
    humiCondition = <p className="humiCondition">
        Damp <BsMoisture color="blue" />
      </p>
  } else if (humidity > 50){
    humiCondition = <p className="humiCondition">
        Hot <MdOutlineWhatshot color="#ed7207" />
      </p>
  }
  return (
    <>
      <div className="humidity highlight-card">
        <p className="highlightTitle">Humidity</p>
        <h2>
          {humidity}%
        </h2>
        {humiCondition}
      </div>
    </>
  );
};

export default Humidity;
