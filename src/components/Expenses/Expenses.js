import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";

import "../../css/Expenses.css";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
  
  const [pickedYear, setPickYear] = useState("2022");

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === pickedYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSetPickedYear={setPickYear}
          selected={pickedYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
