import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render img in single movie", () => {
  render(<SingleMovie />);
  const linkElement1 = screen.getByRole("img", { name: /avengers: endgame/i });
  expect(linkElement1).toBeInTheDocument();
});
