import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Task 2: Render addProduct and pass addProduct function as props", () => {
    const formComponent = screen.getByRole("form");
    expect(formComponent).toBeInTheDocument();
  });

  test("Task 3: Render AllTheThings and MyShoppingCart and pass the functions addToCart and removeFromCart as props", () => {
    const allTheThingsComponent = screen.getByTestId("all-the-things-header");
    const myShoppingCartComponent = screen.getByTestId("my-shopping-cart-header");

    expect(allTheThingsComponent).toBeInTheDocument();
    expect(myShoppingCartComponent).toBeInTheDocument();
  });
});
