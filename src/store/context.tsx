import React, { createContext, useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../constants/apiConsts';

export const WeatherContext = createContext<any>(null);

export const WeatherProvider = (props: any) => {
    const [cityInput, setCityInput] = useState("tel aviv");
    const [currentCityData, setCurrentCityData] = useState({});

    const getCityNumber = async (cityName: string) => {
        const res = await fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`);
        const data = await res.json();
        return data[0];
    };

    const getCurrentWeather = async (cityNumber:number) => {
        const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityNumber}?apikey=${API_KEY}`);
        const data = await res.json();
        setCurrentCityData(data.DailyForecasts[0]);
    }

    // useEffect(() => {
    //     getCityNumber(cityInput).then((data) => {
    //         return getCurrentWeather(data.Key);
    //     })
    //     // console.log(currentCityData)
    // }, [currentCityData])

    


    const value = {
        cityInput,
        setCityInput,
        currentCityData,
        setCurrentCityData,
    };

    return (
        <WeatherContext.Provider value={value}>
            {props.children}
        </WeatherContext.Provider>
    )

}

