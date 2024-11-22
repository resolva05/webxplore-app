import { describe,beforeEach,it,global,vi,afterEach, expect } from 'vitest';
// PopUp.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PopUp from './PopUp';
import '@testing-library/jest-dom';

// Mock the video file import
vi.mock('../../assets/popvd.mp4', () => 'mockedVideo.mp4');

describe('PopUp Component', () => {
  beforeEach(() => {
    render(<PopUp />);
  });

  it('renders the modal and video', () => {
    // Check if the modal is in the document
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Check if the video element is present
    const video = screen.getByRole('video'); // Ensure the role is set
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('autoPlay');
    expect(video).toHaveAttribute('muted');
    expect(video).toHaveAttribute('loop');
  });

  it('validates form submission', async () => {
    // Attempt to submit the form without filling it out
    fireEvent.click(screen.getByRole('button', { name: /submit now/i }));

    // Check for error messages
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/phone number is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/requirements must be at least 20 characters long/i)).toBeInTheDocument();
  });

  it('fills and submits the form successfully', async () => {
    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/mobile no./i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/explain your requirements/i), { target: { value: 'I need a website.' } });

    // Mock the fetch call to simulate a successful submission
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Form submitted successfully!' }),
      })
    );

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /submit now/i }));

    // Wait for the success alert to be called (mocked)
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    // Check if the form inputs are cleared
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email address/i)).toHaveValue('');
    expect(screen.getByLabelText(/mobile no./i)).toHaveValue('');
    expect(screen.getByLabelText(/explain your requirements/i)).toHaveValue('');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
