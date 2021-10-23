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
import { createMemoryHistory } from "history";
import Card from "./Card";
afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Card
        imageUrl="./images/svg-3.svg"
        imageAlt="User"
        type="My Home"
        link="/home"
      />
    </MemoryRouter>,
    div
  );
});
test("it expands when the button is clicked", () => {
  render(
    <MemoryRouter>
      <Card
        imageUrl="./images/svg-3.svg"
        imageAlt="User"
        type="My Home"
        link="/home"
      />
    </MemoryRouter>
  );
});

it("button works correctly", () => {
    const history = createMemoryHistory();
    const { queryByTestId } = render(
    <MemoryRouter
    history={history}
    >
      <Card
        imageUrl="./images/svg-3.svg"
        imageAlt="User"
        type="My Home"
        link="/home"
      />
    </MemoryRouter>
  );
  expect(queryByTestId("Enter1")).toBeTruthy();
  fireEvent.click(queryByTestId("Enter1"));
  expect(queryByTestId("Enter2")).toBeTruthy();
  fireEvent.click(queryByTestId("Enter2"));
  expect(queryByTestId("Enter3")).toBeTruthy();
  fireEvent.click(queryByTestId("Enter3"));
});




it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
