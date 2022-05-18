import React, { useState } from "react";
import "./App.css";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./mock/expenses-mock";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";

const App = () => {
  const [expenseList, setExpenseList] = useState(expenses);
  const [yearSelected, setYearSelected] = useState("");
  function addExpenseHandler(expense) {
    setExpenseList([...expenseList, expense]);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <DisplayExpenses expenses={expenseList} yearFiltered={yearSelected} />
    </div>
  );
};

export default App;
