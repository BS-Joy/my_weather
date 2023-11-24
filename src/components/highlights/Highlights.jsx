import '../../styles/style.css'
import AirQuality from './AirQuality';
import './highlights.css'
import Humidity from './Humidity';
import SunStatus from './SunStatus';
import UvIndex from './UvIndex';
import Visibility from './Visibility';
import WindStatus from './WindStatus';

const Highlights = () => {
    return (
        <>
            <div className="highlights eleme">
                <h1 className="week-title">
                    Today&apos;s Higlights
                </h1>
                <div className="highlight-container">
                    <UvIndex />
                    <WindStatus />
                    <SunStatus />
                    <Humidity />
                    <Visibility />
                    <AirQuality />
                </div>
            </div>
        </>
    );
}

export default Highlights;
