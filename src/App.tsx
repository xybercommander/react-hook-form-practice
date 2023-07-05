// import { useState } from "react";
// import CustomButton from "./components/CustomButton";
import "./App.css";
import ExpenseForm from "./ExpenseForm/components/ExpenseForm";
import ExpenseTable from "./ExpenseForm/components/ExpenseTable";
// import Form from "./components/Form";

function App() {
  return (
    <div className="app mx-3">
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}

export default App;
