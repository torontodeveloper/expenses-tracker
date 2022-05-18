import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, item, price }) => {
  const [title, setTitle] = useState(item);
  console.log("Expense Item evaluaed by React");
  function handleClick() {
    setTitle("Updated");
    console.log(title);
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">
        {Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(price)}
      </div>
      <button onClick={handleClick}>Change Title</button>
    </div>
  );
};
export default ExpenseItem;
