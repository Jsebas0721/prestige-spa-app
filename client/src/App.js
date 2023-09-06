
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import Login from "./features/users/Login";
import Signup from './features/users/Signup';
import Header from './Header';
import NavBar from './NavBar';
import UserNavBar from './features/users/UserNavBar';
import Services from './features/services/Services';
import Profile from './features/users/Profile';
import { useEffect } from 'react';
import { fetchMe } from './features/users/usersSlice';
import Home from './Home';
import ProfessionalList from './features/professionals/ProfessionalList';
import LocationList from './features/locations/LocationList';
import AppointmentList from './features/appointments/AppointmentList';
import AppointmentForm from './features/appointments/AppointmentForm';
import { fetchLocations } from './features/locations/locationsSlice';
import { fetchProfessionals } from './features/professionals/professionalsSlice';
import { fetchServices } from './features/services/servicesSlice';


function App() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
    dispatch(fetchProfessionals());
    dispatch(fetchServices());
    dispatch(fetchLocations());
  },[dispatch])
  
 

  return (
    <div className="app">
      <Header/>
      {user ? (
        <div>
          <UserNavBar/>
          <div className='welcome-message'>
            <h1>Welcome {user.first_name}!</h1>
          </div>
          <Routes>
            <Route exact path={`/profile/${user.username}`} element={<Profile/>}/>
            <Route exact path="/services" element={<Services/>}/>
            <Route exact path="/professionals" element={<ProfessionalList/>}/>
            <Route exact path='/locations' element={<LocationList/>}/>
            <Route exact path='/appointments' element={<AppointmentList/>}/>
            <Route exact path="/appointments/new" element={<AppointmentForm/>}/>
          </Routes>
        </div>
      ) : (
        <div>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
