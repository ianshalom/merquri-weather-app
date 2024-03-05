import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { WeatherDataProps } from "types";

interface initialStateProps {
  weatherData: WeatherDataProps[];
}

const initialState: initialStateProps = {
  weatherData: [],
};

export const searchHistory = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    saveSearchResult: (state, action: PayloadAction<WeatherDataProps>) => {
      state.weatherData = [...state.weatherData, action.payload];
    },
    removeSearchResult: (state, action: PayloadAction<string>) => {
      state.weatherData = state.weatherData.filter(
        (w) => w.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveSearchResult, removeSearchResult } = searchHistory.actions;

export default searchHistory.reducer;
