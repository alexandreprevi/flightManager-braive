import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import flightService from "./flightService"

const initialState = {
  flights: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
}

export const createFlight = createAsyncThunk(
  "flight/create",
  async (flightData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token
      return await flightService.createFlight(flightData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkApi.rejectWithValue(message)
    }
  }
)

export const getAllFlights = createAsyncThunk(
  "flight/getAll",
  async (_, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token
      return await flightService.getAllFlights(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkApi.rejectWithValue(message)
    }
  }
)

export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState
    },
  },
  extraReducers: (builder) => {
    builder
      // create flight
      .addCase(createFlight.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createFlight.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.flights.push(action.payload)
      })
      .addCase(createFlight.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // get all flights
      .addCase(getAllFlights.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllFlights.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.flights = action.payload
      })
      .addCase(getAllFlights.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = flightSlice.actions
export default flightSlice.reducer
