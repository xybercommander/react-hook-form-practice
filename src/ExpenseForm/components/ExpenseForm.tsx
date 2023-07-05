import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import categories from "../categories";

const ExpenseForm = () => {
  const schema = z.object({
    description: z
      .string({ invalid_type_error: "Description is required." })
      .min(6, { message: "Description should have more than 5 characters." }),
    amount: z
      .number({ invalid_type_error: "Amount is required." })
      .min(1, { message: "Amount should be more than ₹1." }),
    category: z.enum(categories, {
      errorMap: () => ({ message: "Category is required." }),
    }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* The code you provided is rendering a form input field for the
      "Description" field. */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          <strong>Description</strong>
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      {/* The code you provided is rendering a form input field for the "Amount"
      field. */}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          <strong>Amount</strong>
        </label>
        <div className="input-group">
          <span className="input-group-text">₹</span>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
            id="amount"
            aria-describedby="basic-addon1"
          />
        </div>
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          <strong>Category</strong>
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          {...register("category")}
        >
          <option></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
