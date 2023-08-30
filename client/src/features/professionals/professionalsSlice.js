import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProfessionals = createAsyncThunk("professionals/fetchProfessionals", () => {
    return fetch("/professionals")
    .then((resp) => resp.json())
    .then((professionals) => professionals);
});

const initialState= {
    professionals: [],
    status: "idle",
}

const professionalsSlice = createSlice({
    name: "professionals",
    initialState,
    reducers: {
   
    },
    extraReducers: {
        [fetchProfessionals.pending](state){
            state.status = "loading";
        },
        [fetchProfessionals.fulfilled](state, action) {
            state.professionals = action.payload;
            state.status = "idle";
        },
    },
});

export default professionalsSlice.reducer;