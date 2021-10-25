// import dependencies
import React from 'react';
// import react dom
import ReactDOM from 'react-dom';
// import react-testing methods
import {render, cleanup, fireEvent} from '@testing-library/react';
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import renderer for take snapshots
import renderer from 'react-test-renderer';

// import the component for testing
import { MemoryRouter } from 'react-router-dom';
import useForm from "./useForm";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><useForm /></MemoryRouter>, div)
})

// it("renders footer correctly", () => {
//     const {getByTestId} = render(<MemoryRouter><Footer /></MemoryRouter>)
//     expect(getByTestId('heading-1')).toBeTruthy();
//     expect(getByTestId('heading-1')).toHaveTextContent("We will provide necessary informations that you want!!!");
//     // expect(getByTestId('subcription-text')).toBeTruthy();
//     // expect(getByTestId('subcription-text')).toHaveTextContent("Send us what you want to know");
//     // expect(getByTestId('send')).toBeTruthy();
//     // expect(getByTestId('send')).toHaveTextContent("Send us");
// })


it("matches snapshot", () => {
    const tree = renderer.create(<MemoryRouter><useForm /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})