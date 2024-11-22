import { describe,beforeEach,test,vi, expect } from 'vitest';
// import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyPolicy from './PrivacyPolicy'; // Adjust the import based on your file structure
// import { vi } from 'vitest';

describe('PrivacyPolicy Component', () => {
  beforeEach(() => {
    render(<PrivacyPolicy />);
  });

  test('renders Privacy Policy title', () => {
    const titleElement = screen.getByRole('heading', { name: /privacy policy/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders last updated date', () => {
    const dateElement = screen.getByText(/last updated: september 30, 2024/i);
    expect(dateElement).toBeInTheDocument();
  });

  test('renders all section headings', () => {
    const headings = [
      '1. Information We Collect',
      '2. How We Use Your Information',
      '3. Sharing Your Information',
      '4. Cookies and Tracking Technologies',
      '5. Data Security',
      '6. Your Data Rights',
      '7. Third-Party Links',
      '8. Changes to This Policy',
    ];

    headings.forEach((heading) => {
      const headingElement = screen.getByRole('heading', { name: new RegExp(heading, 'i') });
      expect(headingElement).toBeInTheDocument();
    });
  });

  test('renders all section texts', () => {
    const sectionTexts = [
      /personal information: name, email address, phone number/i,
      /service delivery: to provide, manage, and improve our/i,
      /we do not sell, trade, or rent your personal information/i,
      /we use cookies and similar technologies/i,
      /we take appropriate measures to protect your personal information/i,
      /you have the right to access, correct, delete/i,
      /our website may contain links to third-party websites/i,
      /we may update this privacy policy from time to time/i,
    ];

    sectionTexts.forEach((text) => {
      const textElement = screen.getByText(text);
      expect(textElement).toBeInTheDocument();
    });
  });

  test('scrolls to top on mount', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo');
    
    render(<PrivacyPolicy />);
    
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0); // Verify that it was called with top
    scrollToSpy.mockRestore(); // Restore the original implementation
  });
});
