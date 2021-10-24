/**
 * @jest-environment jsdom
 */

import { render } from "../../utils/test-utils";
import { screen, waitFor } from "@testing-library/react";
import React from "react";
import RegisterForm from "../../components/Forms/RegisterForm";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

test("initial render", () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  screen.debug();
});

test("rendering and submitting a basic Formik form", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /first name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /last name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
  userEvent.type(screen.getByTestId("password"), 'test1234')
  userEvent.type(screen.getByTestId("re_password"), 'test1234')
  
  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalled()
  })
  //screen.debug();
  
});

test("shows error message If first name not entered", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /last name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
  userEvent.type(screen.getByTestId("password"), 'test1234')
  userEvent.type(screen.getByTestId("re_password"), 'test1234')
  
  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(screen.getByTestId("err-firstname")).toHaveTextContent("Required Field")
  })
  //screen.debug();
  
});

test("shows error message If last name not entered", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /first name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
  userEvent.type(screen.getByTestId("password"), 'test1234')
  userEvent.type(screen.getByTestId("re_password"), 'test1234')
  
  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(screen.getByTestId("err-lastname")).toHaveTextContent("Required Field")
  })
  //screen.debug();
  
});

test("shows error message If email not entered", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /first name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /last name/i }), 'test-name')
  userEvent.type(screen.getByTestId("password"), 'test1234')
  userEvent.type(screen.getByTestId("re_password"), 'test1234')
  
  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(screen.getByTestId("err-email")).toHaveTextContent("Required Field")
  })
  //screen.debug();
  
});

test("shows error message If password not entered", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /first name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /last name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
  userEvent.type(screen.getByTestId("re_password"), 'test1234')
  
  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(screen.getByTestId("err-pwd")).toHaveTextContent("Required Field")
  })
  //screen.debug();
  
});

test("shows error message If re-password not entered", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /first name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /last name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
  userEvent.type(screen.getByTestId("password"), 'test1234')

  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(screen.getByTestId("err-repwd")).toHaveTextContent("Required Field")
  })
  //screen.debug();
  
});


test("shows error message if email not in proper format", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /first name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /last name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'testgmailcom')
  userEvent.type(screen.getByTestId("password"), 'test')
  userEvent.type(screen.getByTestId("re_password"), 'test')
  
  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(screen.getByTestId("err-email")).toHaveTextContent("Invalid Type")
  })
  //screen.debug();
  
});

test("shows error message if password not have atleast 6 charactors", async () => {
  const handleSubmit = jest.fn()
  render(<RegisterForm onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByRole('textbox', { name: /first name/i }), 'test-name')
  userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
  userEvent.type(screen.getByTestId("password"), 'test')
  userEvent.type(screen.getByTestId("re_password"), 'test')
  
  userEvent.click(screen.getByRole('button', {name: /register/i}))

  await waitFor(() => {
    expect(screen.getByTestId("err-pwd")).toHaveTextContent("Minimum of 6 Characters Needed")
  })
  //screen.debug();
  
});

