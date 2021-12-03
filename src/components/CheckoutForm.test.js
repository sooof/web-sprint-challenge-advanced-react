import React from "react";
import MutationObserver from 'mutationobserver-shim';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
    console.log("test CheckoutForm ")
});

test('renders the contact form header', ()=> {
    render(<CheckoutForm/>)
    const header = screen.queryByText('Checkout Form');

    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/Checkout Form/i);
    expect(header).not.toBeFalsy();
    
});
test("shows success message on submit with form details", async() => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, "Sooof");

    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, "Geng");

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "333333 Ladera dr,");

    const city = screen.getByLabelText(/Address:/i);
    userEvent.type(city, "Benicia");

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "California");

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "94510");


    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(()=> {
        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(address).toBeInTheDocument();
        expect(city).toBeInTheDocument();
        expect(state).toBeInTheDocument();
        expect(zip).toBeInTheDocument();
    });
});
test(" Fill out to test that when all form inputs are filled with valid data, a success message appears", async () => {
    render(<CheckoutForm />);
    console.log("test CheckoutForm ")
    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, "Sooof");

    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, "Geng");

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "333333 Ladera dr,");

    const city = screen.getByLabelText(/Address:/i);
    userEvent.type(city, "Benicia");

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "California");

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "94510");


    const button = screen.getByRole("button");
    userEvent.click(button);

    const message = await screen.findByText(/You have ordered some plants! Woo-hoo!/i);
    expect(message).toBeInTheDocument();
});