
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    user: null,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload
        },
        userLogin(state, action) {
            state.user = action.payload
        },
        userLogout(state, action){
            state.user = action.payload;
        },
        userUpdate(state, action){
            state.user = action.payload
        }
    }
});

export const { userLogin, userLogout, userUpdate, setUser } = usersSlice.actions;

export default usersSlice.reducer;



