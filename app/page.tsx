// Home.tsx
"use client"
import React, { useState } from 'react';
import WobbleCardDemo from "./components/hero";
import Navbar from "./components/hero/navbar";

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [countryData, setCountryData] = useState<any>(null);
  const [forexData, setForexData] = useState<any>(null);

  const fetchWeatherData = async (country: string) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`);
    const data = await response.json();
    setWeatherData(data);
  };

  const fetchCountryData = async (country: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();
    return data[0];
  };

  const fetchForexData = async (currency: string) => {
    try {
      console.log("Fetching Forex Data for currency:", currency); // Debugging: Log the currency
      const apiKey = process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`);
  
      if (!response.ok) throw new Error(`Forex data not found for currency: ${currency}`);
  
      const data = await response.json();
      console.log("Fetched Forex Data:", data); // Debugging: Log the forex data response
      setForexData(data);
    } catch (error) {
      console.error("Failed to fetch forex data:", error);
    }
  };

  const handleSearch = async (query: string) => {
    const countryDataResult = await fetchCountryData(query);
    setCountryData(countryDataResult);

    if (countryDataResult) {
      const currency = countryDataResult.currencies ? Object.keys(countryDataResult.currencies)[0] : 'USD';
      await fetchWeatherData(query);
      await fetchForexData(currency);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <WobbleCardDemo weatherData={weatherData} countryData={countryData} forexData={forexData} />
    </>
  );
}
