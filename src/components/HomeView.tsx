import { TextField, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '../store/context';
import { debounce } from '../utils/debounce';
import { localStorageServices } from '../services/localStorage';
import CurrentCityView from './CurrentCityView';
import classes from '../App.module.scss';
import {appDictionary} from "../constants/appConsts";
import UseBoolean from '../utils/UseBoolean';

const HomeView = () => {
    const {cityInput, setCityInput, currentCityData, currentCityDescription } = useContext(WeatherContext);
    const [isCelcius, {setFalse, setTrue}] = UseBoolean(true);
    const {HOME_VIEW_TITLE} = appDictionary;
    console.log(cityInput)

    // useEffect(() => {
        

    // },[cityInput])

    const changeCityInputHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value);
        // localStorageServices.saveCityInput(e.target.value);
    }, 1500)

    return (
        <div className={classes.homeViewWrapper}>
            <Typography variant="h2" component="h2">
                {HOME_VIEW_TITLE}
            </Typography>
            <TextField
                id="outlined-basic"
                label="Enter city name..."
                variant="outlined"
                sx={{ width: "300px", marginBottom: "30px" }}
                key={cityInput}
                // value={cityInput}
                onChange={changeCityInputHandler}
            /*error={true} helperText="No digits allowed"*/ />
            <CurrentCityView isCelcius={isCelcius} setTrue={setTrue} setFalse={setFalse}/>

        </div>
    )
}

export default HomeView


