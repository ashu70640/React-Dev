import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("should render RestaurantCard component eith props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard component with Promoted Label", () => {
//   render(<withPromotedLabel resData={MOCK_DATA} />);
//   const promotedLabel = screen.getByDisplayValue("AT ₹199");
//   expect(promotedLabel).toBeInTheDocument();
// });
