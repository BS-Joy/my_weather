import "../../styles/style.css";
import Header from "../header/Header";
import Today from "../today/Today";
import Week from "../week/Week";
import Highlights from "../highlights/Highlights";
import Loading from "../loading/Loading";
import {
  weathers,
  fetchWeather,
  fetchStatus,
  getError,
  getUnit,
} from "../../features/weather/weatherSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Container = () => {
  const weather = useSelector(weathers);
  const unit = useSelector(getUnit)
  const status = useSelector(fetchStatus);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWeather(''));
    }
  }, [status, dispatch]);

  console.log(weather)

  let container;

  if (status === "loading") {
    container = <><Loading /></>
  } else if (status === "succeeded") {
    container = (
      <div className="container">
        <Header unit={unit} />
        <Today today={weather} unit={unit} />
        <Week unit={unit} week={weather.forecast} />
        <Highlights unit={unit} />
      </div>
    );
  } else if (status === 'failed'){
    container = <p>{error}</p>
  }

  return <>{ container }</>;
};

export default Container;
