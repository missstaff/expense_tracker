import React, { useState } from "react";

import "../../css/NewExpenseForm.css";

const ExpenseForm = (props) => {

  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  const amountChangeHandler = (event) => {
    if (event.target.type === "number") setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    if (event.target.type === "date") setDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    if (event.target.type === "text") setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    };
    props.onSaveExpenseData(expenseData);
    setAmount("");
    setDate("");
    setTitle("");
  };


  return (
      <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
