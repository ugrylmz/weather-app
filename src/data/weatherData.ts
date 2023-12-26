export interface WeatherData {
    cityId: number;
    cityName: string;
    description: string;
    temperature: number; // Temperature in Celsius
  }

export const mockWeatherData: WeatherData[] = [
    {
      cityId: 101,
      cityName: "Springfield",
      description: "Sunny",
      temperature: 23
    },
    {
      cityId: 102,
      cityName: "Shelbyville",
      description: "Cloudy",
      temperature: 18
    },
    {
      cityId: 103,
      cityName: "Capital City",
      description: "Rainy",
      temperature: 15
    },
    {
      cityId: 104,
      cityName: "Ogdenville",
      description: "Windy",
      temperature: 20
    },
    {
      cityId: 105,
      cityName: "North Haverbrook",
      description: "Snowy",
      temperature: -2
    },
    {
      cityId: 106,
      cityName: "Berlin",
      description: "Partly cloudy",
      temperature: 16
    },
    {
      cityId: 107,
      cityName: "Munich",
      description: "Rainy",
      temperature: 14
    },
    {
      cityId: 108,
      cityName: "Hamburg",
      description: "Overcast",
      temperature: 13
    },
    {
      cityId: 109,
      cityName: "Cologne",
      description: "Clear",
      temperature: 17
    },
    // ... More German cities
    {
      cityId: 120,
      cityName: "Istanbul",
      description: "Sunny",
      temperature: 25
    },
    {
      cityId: 121,
      cityName: "Ankara",
      description: "Cloudy",
      temperature: 20
    },
    {
      cityId: 122,
      cityName: "Izmir",
      description: "Clear",
      temperature: 27
    },
    {
      cityId: 123,
      cityName: "Antalya",
      description: "Sunny",
      temperature: 30
    },
    // ... More Turkish cities
    {
      cityId: 130,
      cityName: "Riyadh",
      description: "Hot",
      temperature: 40
    },
    {
      cityId: 131,
      cityName: "Jeddah",
      description: "Humid",
      temperature: 35
    },
    {
      cityId: 132,
      cityName: "Mecca",
      description: "Sunny",
      temperature: 36
    },
    {
      cityId: 133,
      cityName: "Medina",
      description: "Clear",
      temperature: 34
    },
  ];
