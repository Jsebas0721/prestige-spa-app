import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
}

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        addReview(state, action){
            state.reviews.push(action.payload)
        }

    },
})

export const { addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
