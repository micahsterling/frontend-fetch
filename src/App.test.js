import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders form", () => {
  render(<App />);
  const formElement = screen.getByText(/form/i);
  expect(formElement).toBeInTheDocument();
});
