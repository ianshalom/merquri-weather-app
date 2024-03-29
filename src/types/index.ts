export interface ChildrenProps {
  children: React.ReactNode;
}

export interface WeatherDataProps {
  id: string;
  countryId: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  name: string;
  country: string;
  humidity: string;
  timestamp: string;
}
