import { render, screen } from "@testing-library/react";
import TermsConditions from "./TermsConditions"; // Adjust the path if necessary
import { describe, it, expect,vi } from 'vitest';
describe("TermsConditions Component", () => {
  // Test for rendering the main title
  it("renders the Terms and Conditions title", () => {
    render(<TermsConditions />);
    const titleElement = screen.getByRole("heading", { name: /Terms and Conditions/i });
    expect(titleElement).toBeInTheDocument();
  });

  // Test for rendering the last updated date
  it("displays the last updated date", () => {
    render(<TermsConditions />);
    const lastUpdated = screen.getByText(/Last updated: September 30, 2024/i);
    expect(lastUpdated).toBeInTheDocument();
  });

  // Test for rendering each section heading
  it("renders all section headings", () => {
    render(<TermsConditions />);
    const headings = [
      "1. Acceptance of Terms",
      "2. Changes to Terms",
      "3. Services Provided",
      "4. User Responsibilities",
      "5. Intellectual Property",
      "6. Payment Terms",
      "7. Confidentiality",
      "8. Limitation of Liability",
      "9. Indemnification",
      "10. Governing Law",
      "11. Termination",
    ];
    headings.forEach((heading) => {
      const headingElement = screen.getByText(heading);
      expect(headingElement).toBeInTheDocument();
    });
  });

  // Test for checking specific content within a section
  it("renders the content for the Acceptance of Terms section", () => {
    render(<TermsConditions />);
    const acceptanceContent = screen.getByText(
      /By using our website and services, you confirm that you accept these Terms and Conditions and agree to comply with them./i
    );
    expect(acceptanceContent).toBeInTheDocument();
  });

  // Test to check if page scrolls to the top on render (mock window.scrollTo)
  it("scrolls to the top when component mounts", () => {
    window.scrollTo = vi.fn(); // mock window.scrollTo
    render(<TermsConditions />);
    expect(window.scrollTo).toHaveBeenCalledWith(top);
  });
});
