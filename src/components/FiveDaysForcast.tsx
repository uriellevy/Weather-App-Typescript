import { Typography } from '@mui/material';
import React, { useContext } from 'react'
import classes from '../App.module.scss';
import { WeatherContext } from '../context/context';
import FiveDaysForcastItem from './FiveDaysForcastItem';
import {fiveDaysDummyData} from "../constants/apiConsts"

interface FiveDaysForcastProps {
    isCelcius: boolean
}


const FiveDaysForcast = ({isCelcius}:FiveDaysForcastProps ) => {
    const { fiveDaysForcastData } = useContext(WeatherContext);
    // const fiveDaysForcastData = fiveDaysDummyData.DailyForecasts;
    console.log(fiveDaysForcastData)

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