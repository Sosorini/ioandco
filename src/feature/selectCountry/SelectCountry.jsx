import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import COUNTRY from "../../constants/COUNTRY";
import './SelectCountry.css';
import { getExchangeRate } from "./countrySlice";
import { useDispatch } from "react-redux";

function SelectCountry() {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(getExchangeRate("latest"));
  };

  return (
    <>
      <h1>select country</h1>
      <ul>
        {COUNTRY.map((country) => (
          <li
            key={nanoid()}
            value={country}
            onClick={() => handleClick(country)}
          >
            {country}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SelectCountry;
