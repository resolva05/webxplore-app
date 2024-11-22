// Pricing.test.jsx
import { describe,beforeEach,test, expect } from 'vitest';
// Pricing.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Pricing from './Pricing'; // Adjust the import based on your file structure

describe('Pricing Component', () => {
    beforeEach(() => {
        render(<Pricing />);
    });

    test('renders intro title', () => {
        const titleElement = screen.getByRole('heading', { name: /why choose our development services\?/i });
        expect(titleElement).toBeInTheDocument();
    });

    test('renders intro text', () => {
        const introTextElement = screen.getByText(/we provide top-notch development solutions tailored to your needs/i);
        expect(introTextElement).toBeInTheDocument();
    });

    test('renders mobile development card', () => {
        const mobileTitle = screen.getByRole('heading', { name: /mobile development/i });
        expect(mobileTitle).toBeInTheDocument();

        const mobilePrice = screen.getByText('$10000');
        expect(mobilePrice).toBeInTheDocument();

        const mobileFeatures = screen.getByText(/cross-platform apps with react native or flutter/i);
        expect(mobileFeatures).toBeInTheDocument();
    });

    test('renders web development card', () => {
        const webTitle = screen.getByRole('heading', { name: /web development/i });
        expect(webTitle).toBeInTheDocument();

        const webPrice = screen.getByText('$25000');
        expect(webPrice).toBeInTheDocument();

        const webFeatures = screen.getByText(/fully responsive design for all devices/i);
        expect(webFeatures).toBeInTheDocument();
    });

    test('renders other services card', () => {
        const otherTitle = screen.getByRole('heading', { name: /other services/i });
        expect(otherTitle).toBeInTheDocument();

        const otherPrice = screen.getByText(/\$3000-\$5000/i);
        expect(otherPrice).toBeInTheDocument();

        const otherFeatures = screen.getByText(/seo optimization/i);
        expect(otherFeatures).toBeInTheDocument();
    });

    test('renders video background with attributes', () => {
        const { container } = render(<Pricing />);
        console.log(container.innerHTML); // Log the inner HTML to see if the video element is present
    
        const videoElement = screen.getByTestId('background-video');
    
        expect(videoElement).toBeInTheDocument();
        expect(videoElement).toHaveAttribute('autoPlay');
        expect(videoElement).toHaveAttribute('loop');
        expect(videoElement).toHaveAttribute('muted');
    });
});

