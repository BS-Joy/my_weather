import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    weather: {},
    unit: 'c',
    status: 'idle',
    error: null
}

export const fetchWeather = createAsyncThunk('weather/getWeather', async (place) => {
    let response;
    if(place === ''){
        response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1c5419b191dd478798d131325231511&q=London&days=7&aqi=yes&alerts=no`);

        return response.data;
    } else {
        response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1c5419b191dd478798d131325231511&q=${place}&days=7&aqi=yes&alerts=no`);
        
        return response.data;
    }
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeUnit(state, action) {
            if(action.payload === 'f'){
                state.unit = 'c'
            } else if(action.payload === 'c'){
                state.unit = 'f'
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded'

                // state.weather = [...state.weather, loadedWeather];
                // state.weather = state.weather.concat(loadedWeather);
                state.weather = action.payload
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
    }
})

export const weathers = (state) => state.weather.weather;
export const fetchStatus = state => state.weather.status;
export const getError = state => state.weather.error;
export const getUnit = state => state.weather.unit;

export const { changeUnit } = weatherSlice.actions;

export default weatherSlice.reducer;