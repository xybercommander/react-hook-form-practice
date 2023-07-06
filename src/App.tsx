// import { useState } from "react";
// import CustomButton from "./components/CustomButton";
import { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./ExpenseForm/components/ExpenseForm";
import ExpenseTable from "./ExpenseForm/components/ExpenseTable";
// import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([{}]);

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
