import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchProfessionals} from "./professionalsSlice"
import { useEffect } from "react";
import Professional from "./Professional"

function ProfessionalList() {
  const professionals = useSelector((state) => state.professionals.professionals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfessionals());
  }, [dispatch]);

 

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
