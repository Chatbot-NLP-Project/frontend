import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FormLogIn from "./FormLogIn"

test('on initial render, form is there', () => {
    render(<FormLogIn />) //submitForm = {false} setSignInClicked={false}

    screen.debug()
})

test('buttons are enabled', () => {
    render(<FormLogIn />) //submitForm = {false} setSignInClicked={false}

    expect(screen.getByRole('button', {name: /continue/i})).toBeEnabled();
})

test('add inputs to email and password', () => {
    render(<FormLogIn />) //submitForm = {false} setSignInClicked={false}

    userEvent.type(screen.getByPlaceholderText(/Enter your email/i), "chalindu@gmail.com")
    userEvent.type(screen.getByPlaceholderText(/Enter your password/i), "0715956909") 

    // screen.getByRole('');
})