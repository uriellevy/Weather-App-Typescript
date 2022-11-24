export const fahrenheitToCelciusConverter = (isCelcius:boolean, temp:number) => {
    const convertedTemp = isCelcius ? Math.round((temp - 32) * 0.5556) : temp;
    return convertedTemp;
};

export const stringToWeekDayNumber = (dateString:string) => {
    const date = new Date(dateString);
    const dayNumber = date.getDay();
    return dayNumber; 
};

export const stringToDateFormatter = (dateString: string) => {
    const date = new Date(dateString).toLocaleDateString();
    return date;
};

export const isHotOrCold = (dayTemp:number, nightTemp:number, isCelcius: boolean) => {
    const average = (dayTemp + nightTemp) / 2;
    const boundaryTemp = isCelcius ? 25 : 77;
    return average > boundaryTemp ? "hot" : "cold";
}


