import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./components/Form";

test("renders occupations", () => {
  render(<Form />);
  const linkElement = screen.getByText(/Select an occupation/i);
  expect(linkElement).toBeInTheDocument();
});

test("Form displays title", () => {
  const formTitle = screen.getByText(/Registration Form/i);

  expect(formTitle).toBeInTheDocument();
});
