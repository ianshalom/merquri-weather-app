import { getWeatherData } from "api";
import { useQuery } from "@tanstack/react-query";

// Get location's weather data
export function getLocationWeatherDataQuery(input: string) {
  return {
    queryKey: ["weatherData", input],
    queryFn: () => getWeatherData(input),
    enabled: false,
  };
}

export function useGetLocationData(queryArgs: string) {
  return useQuery({
    ...getLocationWeatherDataQuery(queryArgs),
  });
}

export default useGetLocationData;
