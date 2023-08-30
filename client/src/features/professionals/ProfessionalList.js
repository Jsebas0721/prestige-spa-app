import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfessionals } from "./professionalsSlice";
import Professional from "./Professional";

function ProfessionalList() {
  const dispatch = useDispatch();
  const professionals = useSelector(
    (state) => state.professionals.professionals
  );
  useEffect(() => {
    dispatch(fetchProfessionals());
  }, [dispatch]);

  console.log(professionals);

  const profesionalCard = professionals.map((pro) => (
    <Professional key={pro.id} professional={pro} />
  ));
  return (
    <div>
      <h1>Meet Our Professionals...</h1>
      <ul className="professionals-container">{profesionalCard}</ul>
    </div>
  );
}

export default ProfessionalList;
