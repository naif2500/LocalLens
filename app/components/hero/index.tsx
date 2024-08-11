"use client";
import React from 'react';
import { WobbleCard } from "../ui/wobble-card";

const WobbleCardDemo: React.FC<{ weatherData: any, countryData: any, forexData: any }> = ({ weatherData, countryData, forexData }) => {
  // Safely access the base currency and USD rate or provide fallbacks
  const baseCurrency = forexData?.base_code ?? 'USD'; // Use base_code instead of base
  const usdRate = forexData?.conversion_rates?.USD ?? 'N/A'; // Use conversion_rates instead of rates

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pt-16 mt-16 pb-10">
      
      {/* Card 1: Country Data */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[375px] lg:min-h-[225px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            {countryData ? countryData.name.common : 'Country Data'}
          </h2>
          <p className="mt-4 text-left text-sm text-neutral-200">
            Capital: {countryData ? countryData.capital[0] : 'N/A'}
          </p>
          <p className="mt-4 text-left text-sm text-neutral-200">
            Population: {countryData ? countryData.population : 'N/A'}
          </p>
          <p className="mt-4 text-left text-sm text-neutral-200">
            Region: {countryData ? countryData.region : 'N/A'}
          </p>
        </div>
      </WobbleCard>
      
      {/* Card 2: Weather Data */}
      <WobbleCard containerClassName="col-span-1 min-h-[225px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white">
          {weatherData ? `Weather in ${weatherData.name}` : 'Weather Data'}
        </h2>
        <p className="mt-4 max-w-[20rem] text-left text-sm text-neutral-200">
          Temperature: {weatherData ? `${(weatherData.main.temp - 273.15).toFixed(2)}°C` : 'N/A'}
        </p>
        <p className="mt-4 max-w-[20rem] text-left text-sm text-neutral-200">
          Condition: {weatherData ? weatherData.weather[0].description : 'N/A'}
        </p>
      </WobbleCard>
      
      {/* Card 3: Forex Data */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[375px] lg:min-h-[450px] xl:min-h-[225px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            Exchange Rate: 1 {baseCurrency} to USD
          </h2>
          <p className="mt-4 max-w-[20rem] text-left text-sm text-neutral-200">
            Rate: {usdRate}
          </p>
        </div>
      </WobbleCard>

    </div>
  );
}

export default WobbleCardDemo;
