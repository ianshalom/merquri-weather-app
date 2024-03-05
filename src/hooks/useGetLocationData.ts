import { getWeatherData } from "api";
import { useQuery } from "@tanstack/react-query";

// Get location's weather data
export function getLocationWeatherDataQuery(input: string) {
  console.log("INPUT: ", input);
  return {
    queryKey: ["weatherData", input],
    queryFn: () => getWeatherData(input),
    retry: 1,
    enabled: false,
  };
}

export function useGetLocationData(queryArgs: string) {
  return useQuery({
    ...getLocationWeatherDataQuery(queryArgs),
  });
}

export default useGetLocationData;
