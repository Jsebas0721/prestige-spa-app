import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMe = createAsyncThunk("user/fetchMe", () => {
    return fetch("/me")
    .then((resp) => resp.json())
    .then((user) => user);
});

const initialState= {
    user: null,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userLogin(state, action) {
            state.user = action.payload
        },
        userLogout(state){
            state.user = null;
        },
        userUpdate(state, action){
            state.user = action.payload
        }
    },
    extraReducers: {
        [fetchMe.fulfilled](state, action) {
            state.user = action.payload;
        },
    },
});

export const { userLogin, userLogout, userUpdate } = usersSlice.actions;

export default usersSlice.reducer;