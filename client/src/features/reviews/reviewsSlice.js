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
        },
        deleteReview(state, action){
           const index = state.reviews.findIndex((review) => review.id === action.payload)
           state.reviews.splice(index, 1);
        },

    },
})

export const { addReview, deleteReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
