import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { Chart } from "../Chart/Chart";
import { ExpensesChart } from "./ExpensesChart";
export const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};
