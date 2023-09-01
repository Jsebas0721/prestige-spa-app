import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    appointmentList: []
}

const appointmentsSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
        setAppointments(state, action){

        }

    },
    // extraReducers: {
    //     [fetchMe.fulfilled](state, action) {
    //         state.appointments = action.payload;
    //     },
    // },


});

export const { setAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;

