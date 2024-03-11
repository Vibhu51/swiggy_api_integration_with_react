import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import AboutUs from "../pages/AboutUs";

test("Should load about us component", () => {
    render(<AboutUs />);

    const paragraph = screen.getByText("This is About us Page");
    expect(paragraph).toBeInTheDocument();
})