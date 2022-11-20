

interface Day {
    HasPrecipitation: boolean
    IconPhrase: string
}

interface Night {
    HasPrecipitation: boolean
    IconPhrase: string
}

interface Temperature {
    Maximum: {Value: number}
    Minimum: {Value: number}
}

export interface CurrentCityData {
    Day: Day
    Night: Night
    Temperature: Temperature
}