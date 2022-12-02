import React, { useContext } from 'react'
import classes from '../App.module.scss';
import { WeatherContext } from '../context/context';
import FiveDaysForcastItem from './FiveDaysForcastItem';

interface FiveDaysForcastProps {
    isCelcius: boolean
}


const FiveDaysForcast = ({isCelcius}:FiveDaysForcastProps ) => {
    const { fiveDaysForcastData } = useContext(WeatherContext);

    return (
        <div className={classes.fiveDaysForcastContainer}>
            {
                fiveDaysForcastData ?
                fiveDaysForcastData.map((item: any, idx:number) => (
                    <FiveDaysForcastItem item={item} key={idx} isCelcius={isCelcius}/>
                ))
            :
                    <div>Loading...</div>
            }
        </div>
    )
}

export default FiveDaysForcast