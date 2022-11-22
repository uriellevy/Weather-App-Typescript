import { Typography, Button, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { Clock } from '../utils/clock';
import classes from '../App.module.scss';
import { WeatherContext } from '../context/context';
import { appDictionary, weekDaysDictionary } from "../constants/appConsts";
import { fahrenheitToCelciusConverter, stringToWeekDayNumber, stringToDateFormatter } from "../utils/utilsFunctions";

interface CurrentCityViewProps {
    isCelcius: boolean
    setTrue: () => void
    setFalse: () => void
}


const CurrentCityView = ({ isCelcius, setTrue, setFalse }: CurrentCityViewProps) => {
    const { currentCityData, currentCityDescription } = useContext(WeatherContext)
    const { FAHRENHEIT_SIGN, CELCIUS_SIGN } = appDictionary;
    const { Temperature, Day, Night, Date } = currentCityData;
    const isFetchDataCompleted = Temperature && currentCityDescription;
    const weekDay = weekDaysDictionary[stringToWeekDayNumber(currentCityData.Date)]
    const date = stringToDateFormatter(currentCityData.Date);


    return (

        <div className={classes.currentCityContainer}>
            {isFetchDataCompleted ?
                <>
                    <div className={classes.currentCityTitle}>
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ marginRight: "5px" }}>
                            {`${currentCityDescription && currentCityDescription.EnglishName || "Tel Aviv"},`}
                        </Typography>
                        <Typography
                            variant="h5"
                            component="h5">
                            {currentCityDescription.Country.LocalizedName}
                        </Typography>
                    </div>
                    <div className={classes.currentCitySubtitle}>

                        <Typography
                            variant="h6"
                            component="h6">
                            {`${weekDay},`}
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6">
                            {date}
                        </Typography>
                    </div>
                    <Clock />
                    <div className={classes.toggleTempWrapper}>
                        <Button
                            variant="text"
                            onClick={setFalse}
                            disabled={!isCelcius}
                            sx={{ fontSize: "30px" }}>
                            {FAHRENHEIT_SIGN}
                        </Button>
                        <Divider
                            orientation="vertical"
                            sx={{ height: "40px" }} />
                        <Button
                            variant="text"
                            onClick={setTrue}
                            disabled={isCelcius}
                            sx={{ fontSize: "30px" }}>
                            {CELCIUS_SIGN}
                        </Button>
                    </div>
                    <div className={classes.tempWrapper}>
                        <div className={classes.dayTempWrapper}>
                            <Typography variant="h6" component="h6">
                                {`Day: ${fahrenheitToCelciusConverter(isCelcius, Temperature.Maximum.Value)}°`}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {Day.IconPhrase}
                            </Typography>

                        </div>
                        <div className={classes.nightTempWrapper}>
                            <Typography variant="h6" component="h6">
                                {`Night: ${fahrenheitToCelciusConverter(isCelcius, Temperature.Minimum.Value)}°`}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {Night.IconPhrase}

                            </Typography>
                        </div>

                    </div>
                </>
                :
                <div>
                    Loading...
                </div>
            }

        </div>
    )
}

export default CurrentCityView