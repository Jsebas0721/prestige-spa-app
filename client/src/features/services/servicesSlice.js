import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk("services/fetchServices", () => {
    return fetch("/services")
    .then((resp) => resp.json())
    .then((services) => services);
});

const initialState= {
    services: [],
    status: "idle",
}

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
   
    },
    extraReducers: {
        [fetchServices.pending](state){
            state.status = "loading";
        },
        [fetchServices.fulfilled](state, action) {
            state.services = action.payload;
            state.status = "idle";
        },
    },
});

export default servicesSlice.reducer;