import React from "react";
import renderer from "react-test-renderer";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const component = renderer.create(
    <BrowserRouter location="/game" context={context}>
      <Link to="/game" />
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapShot();
});
