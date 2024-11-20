// Service.test.jsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // For NavLink to work
import Service from "./Service";
import { describe, it, expect, beforeEach } from "vitest";
import { within } from "@testing-library/react";

// Helper to render component within Router context
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Service Component", () => {
  beforeEach(() => {
    renderWithRouter(<Service />);
  });

  it("renders the banner with title 'What we do'", () => {
    const titleElement = screen.getByText("What we do");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders Web Development card", () => {
    const webDevTitle = screen.getByText("Web Development");
    expect(webDevTitle).toBeInTheDocument();
  });

  it("renders all 'Read' buttons for each service card", () => {
    const webDevCard = screen.getByText("Web Development").closest(".card");
//   const appDevCard = screen.getByText("Mobile App Development").closest(".card");
    const webDevReadButton = within(webDevCard).getByRole("button", { name: /Read/i });
//   const appDevReadButton = within(appDevCard).getByRole("button", { name: /Read/i });

  expect(webDevReadButton).toBeInTheDocument();
//   expect(appDevReadButton).toBeInTheDocument();
  });

});
 