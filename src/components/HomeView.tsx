import { TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { WeatherContext } from '../store/context';
import { debounce } from '../utils/debounce';
import { localStorageServices } from '../services/localStorage';
import CurrentCityView from './CurrentCityView';
import classes from '../App.module.scss';
import { appDictionary } from "../constants/appConsts";
import UseBoolean from '../utils/UseBoolean';
import FiveDaysForcast from './FiveDaysForcast';

const HomeView = () => {
    const { cityInput, setCityInput } = useContext(WeatherContext);
    const [isCelcius, { setFalse, setTrue }] = UseBoolean(true);
    const [isTextValid, setIsTextValid] = useState(false);
    const { HOME_VIEW_TITLE } = appDictionary;



    const changeCityInputHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value);
        localStorageServices.saveCityInput(e.target.value);
        /\D/.test(e.target.value) === true ? setIsTextValid(true) : setIsTextValid(false);//Input Number Validation
        console.log(isTextValid)
    }, 1500)

    return (
        <div className={classes.homeViewWrapper}>
            <Typography
                variant="h2"
                component="h2"
                sx={{ margin: "40px 0" }}>
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
                error={!isTextValid} helperText="No digits allowed" />
            <CurrentCityView isCelcius={isCelcius} setTrue={setTrue} setFalse={setFalse} />
            <FiveDaysForcast/>

        </div>
    )
}

export default HomeView


