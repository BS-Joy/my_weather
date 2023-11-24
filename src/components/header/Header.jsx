import { useDispatch } from 'react-redux';
import '../../styles/style.css'
import './header.css';
import { LuSearch } from "react-icons/lu";
import { MdOutlineLocationSearching } from "react-icons/md";
import { changeUnit } from '../../features/weather/weatherSlice';
import { fetchWeather } from '../../features/weather/weatherSlice';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Header = ({unit}) => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');

    const grabLocation = e => setLocation(e.target.value);

    const onSubmit = () => {
        dispatch(fetchWeather(location));
        console.log(location)
        setLocation('')

    }
    return (
        <>
            <div className="header eleme nav">
                <h1 className='mobile-logo'>My Weather...!</h1>
                <form className="search" onSubmit={onSubmit}>
                    <LuSearch className='icon' />
                    <input onChange={grabLocation} className='search-field'  placeholder='Search for places...' type="text" />
                    <button className='search-button'>
                       <MdOutlineLocationSearching color='blue' />
                    </button>
                </form>
                <div className="unit-toggle">
                    <button onClick={() => dispatch(changeUnit('f'))} className={`celsius toggler ${unit === 'c' ? 'active': ''}`}>°C</button>
                    <button onClick={() => dispatch(changeUnit('c'))} className={`farenheit toggler ${unit === 'f' ? 'active': ''}`}>°F</button>
                </div>
            </div>
        </>
    );
}

export default Header;
