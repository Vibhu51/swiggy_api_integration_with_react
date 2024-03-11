import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "./mocks/restaurantMenuMock.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../redux/reduxStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import RestaurantMenu from "../pages/RestaurantMenu";
import Cart from "../pages/Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({data: MOCK_DATA})
    });
});

it("Should test cart adding functionality upon clicking the dish in restaurant menu", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    ));

    const buttons = screen.getAllByTestId("addButton")
    expect(buttons.length).toBe(14)
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[0]);
    const buttons2 = screen.getAllByTestId("addButton")
    expect(buttons2.length).toBe(16)
    
});