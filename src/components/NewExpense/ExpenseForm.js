import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredTitle: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  const amountChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput((prev) => {
      return {
        enteredAmount: "",
        enteredDate: "",
        enteredTitle: "",
      };
    });
    //setUserInput({ enteredAmount: "", enteredDate: "", enteredTitle: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>َAmount</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
