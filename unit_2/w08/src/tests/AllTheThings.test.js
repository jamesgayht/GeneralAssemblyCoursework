import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AllTheThings from "../components/AllTheThings/index.js";

import productsArr from "../products";

describe("AllTheThings Component", () => {
  beforeEach(() => {
    render(<AllTheThings products={productsArr} addToCart={() => {}} />);
  });

  test("Task 4: Render products in AllTheThings component", () => {
    const products = screen.queryAllByTestId("product");
  
    expect(products.length).toBeGreaterThan(0);
  
    products.forEach((product) => {
      const priceMatch = product.textContent.match(/\$\d+\.\d{2}/);
      expect(priceMatch).not.toBeNull();
    });
  });
  
});
