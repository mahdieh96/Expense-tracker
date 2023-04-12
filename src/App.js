import { Expenses } from "./components/Expenses/Expenses";
import React, { useState } from "react";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { Chart } from "./components/Chart/Chart";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "244.4",
    date: new Date(2020, 2, 12),
  },
  {
    id: "e2",
    title: "Paper Toilet",
    amount: "844.4",
    date: new Date(2020, 7, 26),
  },
  {
    id: "e3",
    title: "House Keeper",
    amount: "24.4",
    date: new Date(2019, 2, 12),
  },
];
function App() {
  //return React.createElement(Expenses, {});

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prev) => {
      return [newExpense, ...prev];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}
export default App;
