import { useSelector } from "react-redux";
import { weathers } from "../../features/weather/weatherSlice";
import { GiSun } from "react-icons/gi";

const UvIndex = () => {
  const weather = useSelector(weathers)
  const uvIndex = weather.current.uv;
  let riskLevel;

  if(uvIndex <= 2){
    riskLevel = <p className="uvCondition">
        Minimal <GiSun color="#00c42a" />
      </p>;
  } else if(uvIndex > 2 && uvIndex <= 5 ) {
    riskLevel = <p className="uvCondition">
        Low Risk <GiSun color="#00a0c4" />
      </p>;
  } else if(uvIndex > 5 && uvIndex <= 7){
    console.log('why')
    riskLevel = <p className="uvCondition">
      Moderate Risk <GiSun color="#f5882a" />
    </p>;
  } else if(uvIndex > 7) {
    riskLevel = <p className="uvCondition">
      High Risk <GiSun color="red" />
    </p>;
  }
  return (
    <>
      <div className="uv highlight-card">
        <p className="highlightTitle">uv index</p>
        <h2>{uvIndex}</h2>
        {riskLevel}
      </div>
    </>
  );
};

export default UvIndex;
