import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProfessionals = createAsyncThunk("professionals/fetchProfessionals", () => {
    return fetch("/professionals")
    .then((resp) => resp.json())
    .then((professionals) => professionals);
});

const initialState= {
    professionals: [],
    currentProfessional: null,
    status: "idle",
}

const professionalsSlice = createSlice({
    name: "professionals",
    initialState,
    reducers: {
        setProfessional(state, action){
            state.currentProfessional = action.payload;
        }
   
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

export const { setProfessional } = professionalsSlice.actions;
export default professionalsSlice.reducer;