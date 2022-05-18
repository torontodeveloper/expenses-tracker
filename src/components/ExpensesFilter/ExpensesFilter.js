import React from "react";
import "./ExpensesFilter.css";

const yearList = ["2019", "2020", "2021", "2022"];
const ExpensesFilter = ({ selected, onSelectYear }) => {
  function handleSelect(event) {
    onSelectYear(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter By Year</label>
        <select onChange={handleSelect} value={selected}>
          {yearList.map((year, index) => (
            <option value={year} key={index}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default ExpensesFilter;
