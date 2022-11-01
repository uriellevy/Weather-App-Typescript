import React, { createContext, useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../constants/apiConsts';

export const WeatherContext = createContext<any>(null);

export const WeatherProvider = (props: any) => {
    const [cityNameSearch, setCityNameSearch] = useState("tel aviv");
    const [test, setTest] = useState();

    const getCityNumber = async (cityName: string) => {
        const res = await fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`);
        const data = await res.json().then((data) => {
            setTest(data);
            console.log(test)
        });
    };

    const getCurrentWeather = async (cityNumber:number) => {
        const res = await fetch(`${BASE_URL}/forecasts/v1/daily/1day/${cityNumber}`);
        const data = await res.json().then(data => {
            console.log(data);
        })
    }

    // useEffect(() => {
    //   getCityNumber("london")
    // }, [])



    const value = {};

    return (
        <WeatherContext.Provider value={value}>
            {props.children}
        </WeatherContext.Provider>
    )

}

