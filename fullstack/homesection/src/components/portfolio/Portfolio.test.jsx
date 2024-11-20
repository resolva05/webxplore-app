// Portfolio.test.jsx
import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Portfolio Component', () => {
    test('renders heading and introductory text', () => {
        render(<Portfolio />);
        expect(screen.getByText(/Delivering cutting-edge solutions/i)).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/i)).toBeInTheDocument();
    });

    test('renders "Know More" button', () => {
        render(<Portfolio />);
        const knowMoreButton = screen.getByRole('button', { name: /Know More/i });
        expect(knowMoreButton).toBeInTheDocument();
    });




    test('renders the ProjectCards component', () => {
        render(<Portfolio />);
        expect(screen.getByText(/Our Projects/i)).toBeInTheDocument();
    });
});
