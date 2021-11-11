import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FormLogIn from "./FormLogIn"
import "@testing-library/jest-dom/extend-expect";
// import renderer for take snapshots
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

test('on initial render, form is there', () => {
    render(<FormLogIn />) //submitForm = {false} setSignInClicked={false}
    //screen.debug()
})

test('buttons are enabled', () => {
    render(<FormLogIn />) //submitForm = {false} setSignInClicked={false}
    expect(screen.getByRole('button', {name: /continue/i})).toBeEnabled();
})

test('add inputs to email and password', () => {
    render(<FormLogIn />) //submitForm = {false} setSignInClicked={false}

    userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "chalindu@gmail.com");
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "0715956909") ;
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
})

test('invalid email', () => {
    render(<FormLogIn />) 

    userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "invalid email");
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "0715956909") ;
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Email address is invalid/)).toBeTruthy();
})

test('email address and password not entered', () => {
    render(<FormLogIn />) 
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Password is required/)).toBeTruthy();
    expect(screen.getByText(/Email required/)).toBeTruthy();
})

test('email address not entered', () => {
    render(<FormLogIn />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "0715956909") ;
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Email required/)).toBeTruthy();
})

test('password not entered', () => {
    render(<FormLogIn />) 
    userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "chalindu@gmail.com");
    userEvent.click(screen.getByRole('button', {name: /continue/i}));
    expect(screen.getByText(/Password is required/)).toBeTruthy();
})

test("matches snapshot", () => {
    const tree = renderer.create(<MemoryRouter><FormLogIn /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})