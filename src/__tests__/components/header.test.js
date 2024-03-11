import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import appStore from "../../redux/reduxStore"
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

it("Should load header component with a dark theme button", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>)
    const darkThemeButton = screen.getByRole("button", {name: "Switch to dark theme"});
    expect(darkThemeButton).toBeInTheDocument();
});

it("Should load header component with navigation links", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>)
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
})