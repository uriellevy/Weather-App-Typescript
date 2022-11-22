//TODO configure dontenv from https://www.npmjs.com/package/dotenv

export const BASE_URL = "http://dataservice.accuweather.com";
export const API_KEY = "gh0hYoIGWaQzhHaYCLXhXH5vFYEALm6h";


const dummy_data = {
    "Headline": {
      "EffectiveDate": "2022-11-22T13:00:00+01:00",
      "EffectiveEpochDate": 1669118400,
      "Severity": 2,
      "Text": "High winds, with gusts past 35 mph, from Tuesday afternoon into Wednesday morning; winds will be locally damaging",
      "Category": "wind",
      "EndDate": "2022-11-23T13:00:00+01:00",
      "EndEpochDate": 1669204800,
      "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?lang=en-us",
      "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-11-22T07:00:00+01:00",
        "EpochDate": 1669096800,
        "Temperature": {
          "Minimum": {
            "Value": 53,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 63,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 15,
          "IconPhrase": "Thunderstorms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 41,
          "IconPhrase": "Partly cloudy w/ t-storms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=1&lang=en-us"
      }
    ]
  }