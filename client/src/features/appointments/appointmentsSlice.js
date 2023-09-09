import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchAppointments = createAsyncThunk("appointments/fetchAppointments" , () =>{
    return fetch("/appointments")
    .then((resp) => resp.json())
    .then((appointmnents) => appointmnents)
})


const initialState = {
    appointmentList: []
}

const appointmentsSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
        addAppointment(state, action){
            state.appointmentList.push(action.payload);
        },
        updateAppointment(state, action){
          const list = state.appointmentList.map((appointment) => appointment.id === action.payload.id ? action.payload : appointment)
          state.appointmentList = list;
        }, 
        deleteAppointment(state, action){
            const list = state.appointmentList.filter((appointment) => appointment.id !== action.payload.id)
            state.appointmentList = list
        }

    },
    extraReducers: {
        [fetchAppointments.pending](state){
            state.status = "loading";
        },
        [fetchAppointments.fulfilled](state, action) {
            state.appointmentList = action.payload;
            state.status = "idle";
        },
    },

});

export const { addAppointment, updateAppointment, deleteAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;

