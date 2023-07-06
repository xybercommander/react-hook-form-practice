import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface Props {
  expenses: Object[];
  setExpenses: Dispatch<SetStateAction<Object[]>>;
}

const ExpenseTable = ({ expenses, setExpenses }: Props) => {
  const expenseFilter = [
    "All Categories",
    "Groceries",
    "Utilities",
    "Entertainment",
  ];
  const [tableExpenses, setTableExpenses] = useState([...expenses]);
  const [total, setTotal] = useState(0);

  const deleteExpense = (i: number) => {
    const selectedExpense = expenses.find((_item, index) => index === i);
    const removedExpenses = expenses.filter(
      (expense) => expense !== selectedExpense
    );
    setExpenses([...removedExpenses]);
  };

  const handleFilter = (event: ChangeEvent) => {
    if ((event.target as HTMLInputElement).value === "0") {
      setTableExpenses([...expenses]);

      let sum = 0;
      for (let i = 0; i < expenses.length; i++) {
        sum += (expenses as any).amount;
      }
      setTotal(sum);
    } else if ((event.target as HTMLInputElement).value !== "0") {
      let filteredExpenses = expenses.filter(
        (expense) =>
          (expense as any).category ===
          expenseFilter[Number((event.target as HTMLInputElement).value)]
      );
      setTableExpenses([...filteredExpenses]);

      let sum = 0;
      for (let i = 0; i < tableExpenses.length; i++) {
        sum += (tableExpenses as any).amount;
      }
      setTotal(sum);
    }
  };

  return (
    <div className="expense-table mt-3" style={{ width: "50vw" }}>
      <div className="my-3" style={{ width: "50vw" }}>
        <select className="form-select" onChange={handleFilter}>
          {expenseFilter.map((filter, key) => (
            <option value={key}>{filter}</option>
          ))}
        </select>
      </div>
      {Object.keys(tableExpenses[0]).length === 0 ||
      tableExpenses.length === 0 ? (
        <h3>No data added</h3>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* The code `{tableExpenses.map((expense, index) => (...)}` is mapping over the `tableExpenses` array
            and rendering a table row (`<tr>`) for each expense item. */}
            {tableExpenses.map((expense, index) => (
              <tr key={"row-" + index.toString()}>
                <th key={"header-" + index.toString()}>{index + 1}</th>
                <td key={"desc-" + index.toString()} style={{}}>
                  {(expense as any).description}
                </td>
                <td key={"amount-" + index.toString()}>
                  ₹{(expense as any).amount}
                </td>
                <td key={"cat-" + index.toString()}>
                  {(expense as any).category}
                </td>
                <td key={"button-" + index.toString()}>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    key={"btn-" + index.toString()}
                    onClick={() => deleteExpense(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th colSpan={2}>Total</th>
              <td colSpan={3}>₹{total}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseTable;
