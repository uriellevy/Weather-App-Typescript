import { Typography } from '@mui/material';
import { CurrentCityData } from '../interfaces/HomeViewInterfaces';
import classes from '../App.module.scss';
import { weekDaysDictionary } from "../constants/appConsts";
import { appDictionary } from "../constants/appConsts";
import {fahrenheitToCelciusConverter, isHotOrCold, stringToWeekDayNumber} from "../utils/utilsFunctions";



interface FiveDaysForcastItemProps {
    item: CurrentCityData
    isCelcius: boolean
}

const FiveDaysForcastItem = ({item, isCelcius}: FiveDaysForcastItemProps) => {
    const {GLOBAL_TEMP_SIGN} = appDictionary;
    const weekDay = weekDaysDictionary[stringToWeekDayNumber(item.Date)].slice(0,3);
    const dayTemp = fahrenheitToCelciusConverter(isCelcius, item.Temperature.Maximum.Value);
    const NightTemp = fahrenheitToCelciusConverter(isCelcius, item.Temperature.Minimum.Value);
    const isHotOrColdClass = isHotOrCold(dayTemp, NightTemp, isCelcius);
    const currentCityContainerStyle = classes.itemWrapper + " " + classes[isHotOrColdClass];
    
    return (
        <div className={currentCityContainerStyle}>
            <Typography
                variant="h6"
                component="h6">
                {weekDay}
            </Typography>
            <div className={classes.tempWrraper}>
                <Typography
                    variant="h6"
                    component="h6"
                    sx={{ marginRight: "5px" }}>
                    {`${dayTemp}${GLOBAL_TEMP_SIGN}`}
                </Typography>
                <Typography
                    variant="h6"
                    component="h6"
                    sx={{ marginRight: "5px", color:"rgba(0,0,0,0.5)" }}>
                    {`${NightTemp}${GLOBAL_TEMP_SIGN}`}
                </Typography>
            </div>
        </div>
    )
}

export default FiveDaysForcastItem