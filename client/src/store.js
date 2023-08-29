import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import servicesReducer from "./features/services/servicesSlice"

const store = configureStore({
    reducer: {
      users: usersReducer,
      services: servicesReducer,
    },
  });

export default store;