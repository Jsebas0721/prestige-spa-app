import React from "react";
import { useSelector } from "react-redux";
import Location from "./Location"

function LocationList() {

  const locations = useSelector((state) => state.locations.locations);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchLocations());
  // }, [dispatch]);


  const locationCard = locations.map((location) => (
    <Location key={location.id} location={location}/>
  ))

  return (
    <div className="lol">
      <h1>Discover Our Locations..</h1>
      <ul className="location-container">{locationCard}</ul>
    </div>
  );
}

export default LocationList;