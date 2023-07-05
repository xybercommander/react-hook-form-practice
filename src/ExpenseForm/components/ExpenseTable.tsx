const ExpenseTable = () => {
  const items = [
    {
      description: "nice",
      category: "groceries",
      amount: 10,
    },
    {
      description: "nice 2",
      category: "groceries 2",
      amount: 30,
    },
    {
      description: "nice 3",
      category: "groceries 3",
      amount: 20,
    },
  ];

  return (
    <div className="expense-table mt-3">
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
          {items.map((item, index) => (
            <tr>
              <th>{index}</th>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button type="button" className="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
