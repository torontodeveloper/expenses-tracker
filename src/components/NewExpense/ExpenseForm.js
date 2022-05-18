import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  function handleSubmit(event) {
    event.preventDefault();

    const expenseData = {
      item: title,
      price: amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount(0);
    setDate("");
    onSaveExpenseData(expenseData);
  }
  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleAmount(event) {
    setAmount(parseInt(event.target.value));
  }
  function handleDate(event) {
    setDate(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="" id="title">
              Item
            </label>
            <input
              id="title"
              value={title}
              type="text"
              onChange={handleTitle}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="" id="">
              Amount
            </label>
            <input
              id=""
              type="number"
              min="10"
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="" id="">
              Date
            </label>
            <input
              id=""
              type="date"
              min="2020-01-01"
              max="2024-12-31"
              onChange={handleDate}
              value={date}
            />
          </div>
        </div>
        <button className="new-expense__actions">Add Expense</button>
      </form>
      ;
    </div>
  );
};
export default ExpenseForm;
