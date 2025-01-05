/* eslint-disable react/prop-types */
import '../../styles/style.css'
import './week.css'
import WeekCard from './WeekCard';

const Week = ({week, unit}) => {
    const weekDaysInfo = week.forecastday;

    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let weekCard;
    weekCard = weekDaysInfo.map((weekDay, index) => {
        if(index === 0){
           return <WeekCard key={index} day={'Today'} img_source={weekDay.day.condition.icon} temperature={unit === 'c' ? weekDay.day.avgtemp_c : weekDay.day.avgtemp_f} unit={unit} />
                    
        } else {
            const date = new Date(weekDay.date);
            const day = weekDays[date.getDay()]
            return <WeekCard key={index} day={day} img_source={weekDay.day.condition.icon} temperature={unit === 'c' ? weekDay.day.avgtemp_c : weekDay.day.avgtemp_f} unit={unit} />
        }
    })
    return (
        <>
            <div className="week eleme">
                <h1 className="week-title">
                    Daily Forecast
                </h1>
                <div className="week-cards">
                    {weekCard}
                </div>
            </div>
        </>
    );
}

export default Week;
