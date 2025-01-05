/* eslint-disable react/prop-types */
import '../../styles/style.css'
import './today.css'
import city from '../../assets/images/city2.jpg'
import {CiCloud} from 'react-icons/ci'
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { IconContext } from 'react-icons'

const Today = ({today, unit}) => {
    // console.log(today)
    const dateTime = today.location.localtime.split(" ");
    const date = dateTime[0];
    const time = dateTime[1];

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const temp = new Date(date);
    const dayNumber = temp.getDay();
    const day = weekdays[dayNumber];

    return (
        <>
            <div className="today eleme">
                <h1 className='logo'>Wind Light...💡</h1>
                <div className="img-container">
                   <img src={today.current.condition.icon} alt="weather" />
                </div>

                <div className="today-temp">
                    <h1 className="temperature">
                        {unit === 'c' ? today.current.temp_c : today.current.temp_f}°<sup style={{fontSize: '50px'}}>{unit === 'c' ? 'c' : 'F'}</sup>
                    </h1>
                    <h3 className="day">
                        {day},<span className='time'> {time ? time : '?????'}</span>
                    </h3>
                </div>

                <div className="divider"></div>

                <div className="today-weather">
                    <p className="rain inline">
                        <IconContext.Provider value={{color: 'blue'}} >
                            <LiaTemperatureHighSolid />
                        </IconContext.Provider>
                        
                        Feels Like - {unit === 'c' ? `${today.current.feelslike_c}°C` : `${today.current.feelslike_f}°F`}
                    </p>
                    <p className="cloud inline">
                        <CiCloud />
                        {today.current.condition.text}
                    </p>
                </div>

                <div className="location">
                    <p className="location-text">
                        {today.location.name}
                    </p>
                    <div className="location-img">
                        <img src={city} alt="cities" />
                        <div className='img-text'>
                            {today.location.name}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Today;
