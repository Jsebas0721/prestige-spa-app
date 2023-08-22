import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     entity: null, //user
//     status: "idle", //loading state
// };

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: null,
    },
    reducers: {
        userLogin(state, action) {
            state.entities = action.payload
        },
        userLogout(state, action){
            console.log(action.payload)
            state.entities = action.payload
        },
    },
});

export const { userLogin, userLogout } = usersSlice.actions;

export default usersSlice.reducer;