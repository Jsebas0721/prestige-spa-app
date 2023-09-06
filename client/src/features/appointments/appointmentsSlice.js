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
            console.log(action.payload);
            state.appointmentList.push(action.payload);
        },
        updateAppointment(state, action){
            console.log(action.payload)
            const list = state.appointmentList.map((appointment) => {
                if(appointment.id === action.payload.id){
                    return action.payload
                }else{
                    return appointment
                }
            })
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

export const { addAppointment, updateAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;

