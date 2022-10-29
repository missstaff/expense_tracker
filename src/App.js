import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  const expenses = [
    {
      id: "e1",
      amount: 294.67,
      date: new Date(2021, 2, 9),
      title: "Car Insurance",
    },
    {
      id: "e2",
      amount: 97.89,
      date: new Date(2021, 2, 12),
      title: "Cell Phone",
    },
    {
      id: "e3",
      amount: 779.87,
      date: new Date(2021, 7, 15),
      title: "Rent",
    },
    {
      id: "e4",
      amount: 125,
      date: new Date(2021, 1, 19),
      title: "Electric",
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
