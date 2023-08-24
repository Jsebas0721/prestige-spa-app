import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
    return fetch("/users")
    .then((resp) => resp.json())
    .then((users) => users)
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: [],
        status: "idle",
    },
    reducers: {
        userLogin(state, action) {
            state.entities = action.payload
        },
        userLogout(state, action){
            state.entities = action.payload
        },
    },
});

export const { userLogin, userLogout, userUpdate } = usersSlice.actions;

export default usersSlice.reducer;