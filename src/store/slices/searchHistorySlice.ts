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
  },
});

// Action creators are generated for each case reducer function
export const { saveSearchResult } = searchHistory.actions;

export default searchHistory.reducer;
