/* eslint-disable react/prop-types */

const WeekCard = ({day, img_source, temperature, unit}) => {
  return (
    <div className="card">
      <h2 className="week-day">{day}</h2>
      <div className="forcast-img">
        <img src={img_source} style={{ width: "40%" }} alt="today-forcast" />
      </div>
      <p className="temp">{temperature}°<sup>{unit === 'c' ? 'C' : 'F'}</sup></p>
    </div>
  );
};

export default WeekCard;
