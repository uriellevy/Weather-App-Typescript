import { TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { WeatherContext } from '../context/context';
import { debounce } from '../utils/debounce';
import CurrentCityView from './CurrentCityView';
import classes from '../App.module.scss';
import { appDictionary } from "../constants/appConsts";
import UseBoolean from '../utils/customHooks/UseBoolean';
import FiveDaysForcast from './FiveDaysForcast';


const HomeView = () => {
    const { cityInput, setCityInput } = useContext(WeatherContext);
    const [isCelcius, { setFalse, setTrue }] = UseBoolean(true);
    const { HOME_VIEW_TITLE } = appDictionary;

 

    const changeCityInputHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value);
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
                id="filled-basic"
                label="Enter city name..."
                variant="filled"
                sx={{ width: "300px", marginBottom: "30px", fontWeight: "bold" }}
                key={cityInput}
                // value={cityInput}
                onChange={changeCityInputHandler}/>

            <CurrentCityView isCelcius={isCelcius} setTrue={setTrue} setFalse={setFalse} />
            <FiveDaysForcast isCelcius={isCelcius} />

        </div>
    )
}

export default HomeView


