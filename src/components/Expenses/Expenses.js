import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../UI/ExpensesFilter";

import "../../css/Expenses.css";


const Expenses = (props) => {
  const [pickedYear, setPickYear] = useState("2022");
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSetPickedYear={setPickYear} selected={pickedYear} />
        {props.expenses.map((expense) => {
          if (expense.date.getFullYear() == pickedYear) {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          }
        })}
      </Card>
    </div>
  );
};

export default Expenses;
