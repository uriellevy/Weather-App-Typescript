import { Typography } from '@mui/material';
import React, { useContext } from 'react'
import classes from '../App.module.scss';
import { WeatherContext } from '../store/context';

const FiveDaysForcast = () => {
    const { fiveDaysForcastData } = useContext(WeatherContext);

    return (
        <div className={classes.fiveDaysForcastContainer}>
            {
                fiveDaysForcastData ?
                fiveDaysForcastData.map((item: any) => (
                    <div className={classes.itemWrapper}>
                         <Typography
                            variant="h6"
                            component="h6"
                            sx={{ marginRight: "5px" }}>
                                dsfdfsf
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6">
                            sdffsddf
                        </Typography>
                    </div>
                ))
            :
                    <div>Loading...</div>
            }
        </div>
    )
}

export default FiveDaysForcast