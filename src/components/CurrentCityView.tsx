import { Typography, Button, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { Clock } from '../utils/clock';
import classes from '../App.module.scss';
import { WeatherContext } from '../context/context';
import { appDictionary, weekDaysDictionary } from "../constants/appConsts";
import { fahrenheitToCelciusConverter, stringToWeekDayNumber, stringToDateFormatter } from "../utils/utilsFunctions";
import {isHotOrCold} from "../utils/utilsFunctions";
import {dummy_data, basicDummyData} from "../constants/apiConsts";


interface CurrentCityViewProps {
    isCelcius: boolean
    setTrue: () => void
    setFalse: () => void
}


const CurrentCityView = ({ isCelcius, setTrue, setFalse }: CurrentCityViewProps) => {
    // const { currentCityData, currentCityDescription } = useContext(WeatherContext)
    const currentCityData: any = dummy_data.DailyForecasts[0];
    const currentCityDescription: any = basicDummyData;
    const { FAHRENHEIT_SIGN, CELCIUS_SIGN } = appDictionary;
    const { Temperature, Day, Night, Date } = currentCityData;
    const isFetchDataCompleted = Temperature && currentCityDescription;
    const weekDay = weekDaysDictionary[stringToWeekDayNumber(Date)]
    const date = stringToDateFormatter(Date);
    const isHotOrColdClass = isHotOrCold(fahrenheitToCelciusConverter(isCelcius, Temperature.Maximum.Value), fahrenheitToCelciusConverter(isCelcius, Temperature.Minimum.Value), isCelcius);
    const currentCityContainerStyle = classes.currentCityContainer + " " + classes[isHotOrColdClass];
    console.log(isHotOrColdClass)

    return (

        <div className={currentCityContainerStyle}>
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
                            {/* {currentCityDescription.Country.LocalizedName} */}
                            Israel
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