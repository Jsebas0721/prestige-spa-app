
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import Login from "./features/users/Login";
import Signup from './features/users/Signup';
import Header from './Header';
import NavBar from './NavBar';
import UserNavBar from './features/users/UserNavBar';
import Services from './features/services/Services';
import Profile from './features/users/Profile';
import { useEffect } from 'react';
import { setUser } from './features/users/usersSlice';
import Home from './Home';
import ProfessionalList from './features/professionals/ProfessionalList';
import LocationList from './features/locations/LocationList';
import AppointmentList from './features/appointments/AppointmentList';
import AppointmentForm from './features/appointments/AppointmentForm';
import { fetchLocations } from './features/locations/locationsSlice';
import { fetchProfessionals } from './features/professionals/professionalsSlice';
import { fetchServices } from './features/services/servicesSlice';
import ReviewList from './features/reviews/ReviewList';



function App() {
  const professional = useSelector((state) => state.professionals.currentProfessional);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("/me").then((resp) => {
      if(resp.ok){
        resp.json().then((user) => {
          dispatch(setUser(user))
          dispatch(fetchProfessionals());
          dispatch(fetchServices());
          dispatch(fetchLocations());
        })
      }else{
        navigate("/");
      }
    });
  },[dispatch, navigate])
  
  const user = useSelector((state) => state.users.user);
  console.log(user);
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
            {professional ? <Route exact path={`/professionals/${professional.name}/reviews`} element={<ReviewList/>}/> : null }
            <Route exact path='/locations' element={<LocationList/>}/>
            <Route exact path='/appointments' element={<AppointmentList/>}/>
            <Route exact path="/appointments/new" element={<AppointmentForm/>}/>
          </Routes>
        </div>
      ) : (
        <div>
          <NavBar/>
          <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
