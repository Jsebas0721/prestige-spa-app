import { createSlice } from "@reduxjs/toolkit"
import { fetchMe } from "../users/usersSlice";

const initialState = {
    appointmentList: []
}

const appointmentsSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchMe.fulfilled](state, action) {
            state.appointments = action.payload;
        },
    },


});

export default appointmentsSlice.reducer;

