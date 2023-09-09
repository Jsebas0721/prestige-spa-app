import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import servicesReducer from "./features/services/servicesSlice";
import professionalsReducer from "./features/professionals/professionalsSlice";
import locationsReducer from "./features/locations/locationsSlice";
import appointmentsReducer from "./features/appointments/appointmentsSlice";
import reviewsReducer from "./features/reviews/reviewsSlice";

const store = configureStore({
    reducer: {
      users: usersReducer,
      services: servicesReducer,
      professionals: professionalsReducer,
      locations: locationsReducer,
      appointments: appointmentsReducer,
      reviews: reviewsReducer,
    },
  });

export default store;