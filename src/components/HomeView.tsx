import { Box, TextField, Typography } from '@mui/material'
import React, { useState, useContext, useMemo, useEffect } from 'react'
import { WeatherContext } from '../store/context'
import { Clock } from '../utils/clock'
import { debounce } from '../utils/debounce'
import { localStorageServices } from '../services/localStorage'

const HomeView = () => {
    const { cityInput, setCityInput } = useContext(WeatherContext);

    const changeCityInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value);
        localStorageServices.saveCityInput(e.target.value);
    }
    
    console.log(cityInput)

    const debouncedResults = useMemo(() => {
        return debounce(changeCityInputHandler, 1500);
    }, []);

    return (
        <div className='homeViewWrapper'>
            <Typography variant="h2" component="h2">
                HomeView
            </Typography>
            <TextField
                id="outlined-basic"
                label="Enter city name..."
                variant="outlined"
                sx={{ width: "300px" }}
                // value={cityInput}
                onChange={debouncedResults}

            /*error={true} helperText="No digits allowed"*/ />
            <Box sx={{ display: 'flex', border: 1, borderColor: 'primary.main', width: '250px', borderRadius: '10px', p: '5px 10px' }}>
                <Typography variant="h6" component="h6">
                    weather
                </Typography>
                <Clock />
            </Box>
        </div>
    )
}

export default HomeView


