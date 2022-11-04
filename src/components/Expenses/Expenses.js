import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../UI/ExpensesFilter";

import "../../css/Expenses.css";


const Expenses = (props) => {
  
  const [pickedYear, setPickYear] = useState("2022");

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  let expenseContent = <p>No expenses found.</p>
  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSetPickedYear={setPickYear}
          selected={pickedYear}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
