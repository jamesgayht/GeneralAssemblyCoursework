import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form/index.js";

describe("Form Component", () => {
  beforeEach(() => {
    render(<Form addProduct={() => {}} />);
  });

  test("Task 6, 7 and 8: Form component - useState hooks, handleSubmit, and input fields with submit button", async () => {
    const productNameInput = screen.getByPlaceholderText("Product Name");
    const priceInput = screen.getByPlaceholderText("Price");
    const submitButton = screen.getByRole("button", { name: /Add Product/i });

    expect(productNameInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    userEvent.type(productNameInput, "New Product");
    userEvent.type(priceInput, "9.99");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(productNameInput).toHaveValue("");
      expect(priceInput).toHaveValue(0);
    });
  });
});
