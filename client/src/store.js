import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import servicesReducer from "./features/services/servicesSlice"
import professionalsReducer from "./features/professionals/professionalsSlice";
import locationsReducer from "./features/locations/locationsSlice"

const store = configureStore({
    reducer: {
      users: usersReducer,
      services: servicesReducer,
      professionals: professionalsReducer,
      locations: locationsReducer,
    },
  });

export default store;