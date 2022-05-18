import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./DisplayExpenses.css";
import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const DisplayExpenses = ({ expenses, yearFiltered }) => {
  const [yearSelected, setYearSelected] = useState("2020");
  function selectedYearHandler(year) {
    setYearSelected(year);
    console.log("year selected", yearSelected);
  }
  return (
    <div>
      <ExpensesFilter selected={yearSelected} onSelectYear={selectedYearHandler} />
      <Card className="expenses">
        {expenses.map((item, index) => (
          <ExpenseItem key={index} {...item} />
        ))}
      </Card>
    </div>
  );
};
export default DisplayExpenses;
