// import React from 'react';
import { describe, test, expect} from 'vitest';
// import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from './Chatbot'; // Adjust the import based on your file structure

describe('Chatbot Component', () => {
  test('renders the chatbot icon and opens the chatbot window', () => {
    render(<Chatbot />);
    
    // Check if the chatbot icon is rendered
    const chatbotButton = screen.getByRole('button', { name: /chatbot icon/i });
    expect(chatbotButton).toBeInTheDocument();
    
    // Click to open the chatbot
    fireEvent.click(chatbotButton);
    
    // Check if the chatbot window is rendered
    expect(screen.getByText(/have a doubt\? we are here to help!/i)).toBeInTheDocument();
  });

  test('displays sections when the chatbot is opened', () => {
    render(<Chatbot />);
    
    // Open the chatbot
    const chatbotButton = screen.getByRole('button', { name: /chatbot icon/i });
    fireEvent.click(chatbotButton);

    // Check for sections
    expect(screen.getByText(/choose questions from below sections!!/i)).toBeInTheDocument();
    
    // Match section items, ensure the exact text matches your sections
    const sectionItems = screen.getAllByRole('button', { name: /example section/i }); // Adjust if necessary
    expect(sectionItems.length).toBeGreaterThan(0); // Check if at least one item is found
  });

  test('displays questions for the selected section', () => {
    render(<Chatbot />);
    
    // Open the chatbot
    const chatbotButton = screen.getByRole('button', { name: /chatbot icon/i });
    fireEvent.click(chatbotButton);

    // Click on the example section to show its questions
    fireEvent.click(screen.getByText(/example section/i)); // Ensure the section name matches exactly

    // Check if the questions for the selected section are displayed
    expect(screen.getByText(/example question 1/i)).toBeInTheDocument(); // Replace with actual question text
    expect(screen.getByText(/example question 2/i)).toBeInTheDocument(); // Replace with actual question text
  });

  test('returns to the previous section when back button is clicked', () => {
    render(<Chatbot />);
    
    // Open the chatbot
    const chatbotButton = screen.getByRole('button', { name: /chatbot icon/i });
    fireEvent.click(chatbotButton);

    // Click on the example section
    fireEvent.click(screen.getByText(/example section/i));

    // Click the back button
    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);

    // Check that the sections are displayed again
    expect(screen.getByText(/choose questions from below sections!!/i)).toBeInTheDocument();
    
    // Use a flexible matcher to ensure the section items are present
    expect(screen.getByText(/example section/i)).toBeInTheDocument(); // Adjust if necessary
  });
});
