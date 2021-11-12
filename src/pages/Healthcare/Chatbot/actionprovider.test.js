/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
// import dependencies
import React from "react";
// import react dom
import ReactDOM from "react-dom";
// import react-testing methods
import { render, cleanup, fireEvent } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import renderer for take snapshots
import renderer from "react-test-renderer";

// import the component for testing
import { MemoryRouter } from "react-router-dom";
import actionProvider from "./actionProvider";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <actionProvider />
    </MemoryRouter>,
    div
  );
});
it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <actionProvider />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
