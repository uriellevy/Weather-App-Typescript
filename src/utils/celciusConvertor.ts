export const fahrenheitToCelciusConverter = (isCelcius:boolean, temp:number) => {
    const convertedTemp = isCelcius ? Math.round((temp - 32) * 0.5556) : temp;
    return convertedTemp;
}