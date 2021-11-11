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

import userEvent from "@testing-library/user-event"

// import the component for testing
import { MemoryRouter } from 'react-router-dom';
import FormSignup from "./FormSignup";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><FormSignup /></MemoryRouter>, div)
})

test('on initial render, the input fields are editable', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your first name/i), "Amara");
    userEvent.type(screen.getByPlaceholderText(/Enter your last name/i), "Gunadasa");
    userEvent.type(screen.getByPlaceholderText(/Enter your phone number/i), "0715956909") ;
    userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "amara@gmail.com");
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "Pa1ss2word3");
    userEvent.type(screen.getByPlaceholderText(/Confirm your password/i), "Pa1ss2word3");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
})

test('continue with no input', () => {
    render(<FormSignup />) 
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/First name required/)).toBeTruthy();
    expect(screen.getByText(/Last name required/)).toBeTruthy();
    expect(screen.getByText(/Email required/)).toBeTruthy();
    expect(screen.getByText(/Password is required/)).toBeTruthy();
    expect(screen.getByText(/Confirmation password is required/)).toBeTruthy();
})

test('invalid first name', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your first name/i), "123(&*)&^*");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Enter a valid name/)).toBeTruthy();
})

test('invalid last name', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your first name/i), "Amara");
    userEvent.type(screen.getByPlaceholderText(/Enter your last name/i), "123(&*)&^*");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Enter a valid name/)).toBeTruthy();
})

test('phone number with less than 10 digits', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your phone number/i), "071595690") ;
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Phone number must consist of 10 digits/)).toBeTruthy();
})

test('phone number with letters', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your phone number/i), "a9159b690c") ;
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Phone number should be numeric/)).toBeTruthy();
})

test('land line phone number', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your phone number/i), "0365956909") ;
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Phone number should be a mobile number. Not a land line/)).toBeTruthy();
    screen.debug();
})

test('invalid service provider', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your phone number/i), "0795956909") ;
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/This number is not valid. It must be 070, 071, 072, 075, 076, 077, or 078/)).toBeTruthy();
})

test('invalid email address', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "not a valid email");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Email address is invalid/)).toBeTruthy();
})

test('password with less than 8 charaters', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "Pa1ss");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Password needs to be 8 characters or more/)).toBeTruthy();
})

test('password with no uppercase letters', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "pa1ss2word3");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Password must contain an uppercase letter/)).toBeTruthy();
})

test('password with no lowercase letters', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "PA1SS2WORD3");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Password must contain a lowercase letter/)).toBeTruthy();
})

test('different confirmation password', () => {
    render(<FormSignup />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "Pa1ss2word3");
    userEvent.type(screen.getByPlaceholderText(/Confirm your password/i), "Pa1ss2word4");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Passwords do not match/)).toBeTruthy();
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
    const tree = renderer.create(<MemoryRouter><FormSignup /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})