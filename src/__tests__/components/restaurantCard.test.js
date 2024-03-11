import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import mockData from "../mocks/restaurantCardMock.json";
import RestaurantCard from "../../components/RestaurantCard";

it("Should test restaurant card component", () =>{
    render(<BrowserRouter>
        <RestaurantCard {...mockData} />
    </BrowserRouter>);

    const restaurantName = screen.getByText("Pizza Hut");
    expect(restaurantName).toBeInTheDocument();

    const location = screen.getByText("Aundh");
    expect(location).toBeInTheDocument();
})