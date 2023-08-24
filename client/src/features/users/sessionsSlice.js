import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= {
    entities: [],
}

const sessionsSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userLogin(state, action) {
            state.entities = action.payload
        },
        userLogout(state, action){
            state.entities = action.payload
        },
    },
});

export const { userLogin, userLogout } = sessionsSlice.actions;

export default sessionsSlice.reducer;