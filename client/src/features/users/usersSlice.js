import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchMe = createAsyncThunk("user/fetchMe", () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     return fetch("/me").then((resp) => {
//         if(resp.ok){
//             resp.json() .then((user) => user);
//             dispatch(fetchServices());
//             dispatch(fetchProfessionals());
//             dispatch(fetchLocations());    
//         }else{
//             navigate("/");
//         }

//     });
// });

const initialState= {
    user: null,
}
console.log(initialState.user)

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
    },
    // extraReducers: {
    //     [fetchMe.fulfilled](state, action) {
    //         state.user = action.payload;
    //     },
    // },
});

export const { userLogin, userLogout, userUpdate, setUser } = usersSlice.actions;

export default usersSlice.reducer;