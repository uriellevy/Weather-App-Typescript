

const save = (collection:string, value:any) => {
    localStorage.setItem(collection, JSON.stringify(value));
};

const get = (collection:string) => {
    const saved = localStorage.getItem(collection);
    return saved ? JSON.parse(saved) : "";
}

const saveCityInput = (cityName:string) => save("cityName", cityName );

const getCityInput = () => get("cityName");

export const localStorageServices = {
    saveCityInput,
    getCityInput,
}