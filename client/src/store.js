import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import servicesReducer from "./features/services/servicesSlice";
import professionalsReducer from "./features/professionals/professionalsSlice";
import locationsReducer from "./features/locations/locationsSlice";
import appointmentsReducer from "./features/appointments/appointmentsSlice";

const store = configureStore({
    reducer: {
      users: usersReducer,
      services: servicesReducer,
      professionals: professionalsReducer,
      locations: locationsReducer,
      appointments: appointmentsReducer,
    },
  });

export default store;