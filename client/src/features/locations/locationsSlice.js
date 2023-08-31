import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLocations = createAsyncThunk("locations/fetchLocations", () => {
    return fetch("/locations")
    .then((resp) => resp.json())
    .then((locations) => locations);
});

const initialState= {
    locations: [],
    status: "idle",
}

const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
   
    },
    extraReducers: {
        [fetchLocations.pending](state){
            state.status = "loading";
        },
        [fetchLocations.fulfilled](state, action) {
            state.locations = action.payload;
            state.status = "idle";
        },
    },
});

export default locationsSlice.reducer;