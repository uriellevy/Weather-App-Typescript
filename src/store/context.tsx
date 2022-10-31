import React, {createContext} from 'react';

export const WeatherContext = createContext<any>(null);

export const WeatherProvider = (props:any) => {
    


    const value = {};

    return (
        <WeatherContext.Provider value={value}>
        {props.children}
      </WeatherContext.Provider>
    )

}

