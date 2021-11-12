// import dependencies
import React from 'react';
// import react dom
import ReactDOM from 'react-dom';
// import react-testing methods
import {render, cleanup, screen, fireEvent} from '@testing-library/react';
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import renderer for take snapshots
import renderer from 'react-test-renderer';

import userEvent from '@testing-library/user-event';

// import the component for testing
import { MemoryRouter } from 'react-router-dom';
import Password from "./Password";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><Password /></MemoryRouter>, div)
})

test('on initial render, the change password button is enabled', () => {
    render (<Password/>);
    expect(screen.getByRole('button', {name: /change password/i})).toBeEnabled();
})

test('immediately after clicking change password, confirm button is enabled', () => {
    render(<Password />)
    userEvent.click(screen.getByRole('button', {name: /change password/i}));
    expect(screen.getByRole('button', {name: /confirm/i})).toBeEnabled(); 
})

test('immediately after clicking confirm, show buttons are visible', () => {
    render(<Password />)
    userEvent.click(screen.getByRole('button', {name: /change password/i}));
    expect(screen.getAllByRole('button', {name: /show/i}).length).toEqual(3);
})

test('not matching confirm password', () => {
    render(<Password />)
    userEvent.click(screen.getByRole('button', {name: /change password/i}));
    userEvent.type(screen.getByPlaceholderText(/Current password/i), "password"); 
    userEvent.type(screen.getByPlaceholderText(/New password/i), "password1"); 
    userEvent.type(screen.getByPlaceholderText(/Confirm password/i), "password2");
    expect(screen.getByText(/Confirm Password does not match./)).toBeTruthy();
})

test('immediately after clicking show, hide button appears', () => {
    render(<Password />)
    userEvent.click(screen.getByRole('button', {name: /change password/i}));
    userEvent.type(screen.getByPlaceholderText(/Current password/i), "password"); 
    userEvent.click(screen.getAllByRole('button', {name: /show/i})[0]);
    expect(screen.getAllByRole('button', {name: /hide/i}).length).toEqual(1);
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
    const tree = renderer.create(<MemoryRouter><Password /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})