import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import MOCK_DATA from "./mocks/restaurantList.Mock.json";
import { act } from "react-dom/test-utils";
import Body from "../pages/Body";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("Should load all restarant cards by mocking api call", async () => {
    await act(async () => render(<BrowserRouter>
    <Body />
    </BrowserRouter>));
    const resCardBeforeSearch = screen.getAllByTestId("restaurantCard");
    expect(resCardBeforeSearch.length).toBe(9);
});

it("Should search and load two restauant and loads only matching with restaurant name", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
    const inputEl = screen.getByTestId("searchBox");
    expect(inputEl).toBeInTheDocument();

    fireEvent.change(inputEl, {target: {value: "burger"}});

    const resCardAfterSearch = screen.getAllByTestId("restaurantCard");
    expect(resCardAfterSearch.length).toBe(2);
})