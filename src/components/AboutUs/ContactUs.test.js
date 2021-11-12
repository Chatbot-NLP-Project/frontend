
// import dependencies
import React from 'react';
// import react dom
import ReactDOM from 'react-dom';
// import react-testing methods
import {render, screen, mount, cleanup, fireEvent} from '@testing-library/react';
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import renderer for take snapshots
import renderer from 'react-test-renderer';

// import the component for testing
import { MemoryRouter } from 'react-router-dom';
import ContactUs from "./ContactUs";
import Button from "./ContactUs";
import userEvent from '@testing-library/user-event';


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><ContactUs /></MemoryRouter>, div)
})

// test('on initial render, the submit button is enabled', () => {
//     render (<ContactUs/>);

//     screen.debug();
// })

// test('on initial render, the submit button is enabled', () => {
//     render (<ContactUs/>);

//     screen.getByRole('');
// })

test('on initial render, the submit button is enabled', () => {
    render (<ContactUs/>);
    expect(screen.getByRole('button', {name: /submit/i})).toBeEnabled();
})

test('on initial render, the input fields are editable', () => {
    render (<ContactUs/>);
    userEvent.type(screen.getByPlaceholderText(/your-email@example.com/i), "sample@gmail.com")
    userEvent.type(screen.getByRole('textbox', {name: /Message/i}), "sample message")
})

test('email address and message not entered', () => {
    render (<ContactUs/>);
    fireEvent.click(screen.getByRole('button', {name: /submit/i}))
    expect(screen.getByText(/Please fill the required fields./)).toBeTruthy();
})

test('email address not entered', () => {
    render (<ContactUs/>);
    userEvent.type(screen.getByRole('textbox', {name: /Message/i}), "sample message")
    fireEvent.click(screen.getByRole('button', {name: /submit/i}))
    expect(screen.getByText(/Please fill the required fields./)).toBeTruthy();
})

test('message not entered', () => {
    render (<ContactUs/>);
    userEvent.type(screen.getByPlaceholderText(/your-email@example.com/i), "sample@gmail.com")
    fireEvent.click(screen.getByRole('button', {name: /submit/i}))
    expect(screen.getByText(/Please fill the required fields./)).toBeTruthy();
})

test('invalid email address', () => {
    render (<ContactUs/>);
    userEvent.type(screen.getByPlaceholderText(/your-email@example.com/i), "not a valid email")
    userEvent.type(screen.getByRole('textbox', {name: /Message/i}), "sample message")
    fireEvent.click(screen.getByRole('button', {name: /submit/i}))
    expect(screen.getByText(/Your email address is not valid./)).toBeTruthy();
})

test('successfully sending email', () => {
    render (<ContactUs/>);
    userEvent.type(screen.getByPlaceholderText(/your-email@example.com/i), "sample@gmail.com")
    userEvent.type(screen.getByRole('textbox', {name: /Message/i}), "sample message")
    fireEvent.click(screen.getByRole('button', {name: /submit/i}))
    expect(screen.getByText(/Sending your message./)).toBeTruthy();
})

it("matches snapshot", () => {
    const tree = renderer.create(<MemoryRouter><ContactUs /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})