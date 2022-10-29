import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "../../css/Expenses.css";


const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
