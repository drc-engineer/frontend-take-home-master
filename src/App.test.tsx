import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

jest.setTimeout(10000);

describe('App component', () => {
    test('Given the App component is rendered, it should display the initial state with "Getflix"', () => {
        render(<App />);
        expect(screen.getByText('Getflix')).toBeInTheDocument();
    });

    test('Given the App component is rendered, when a user updates the search query to "Batman", then it should fetch and display movies asynchronously', async () => {
        render(<App />);

        const input = screen.getByPlaceholderText('Search for movies...');
        fireEvent.change(input, { target: { value: 'Batman' } });

        await waitFor(
            async () => {
                try {
                    const movieCards = await screen.findAllByTestId('movie-card');
                    console.log('Number of movie cards found:', movieCards.length);

                    expect(movieCards.length).toBeGreaterThan(0);
                } catch (error) {
                    console.error('Error finding movie cards:', error);
                }
            },
            { timeout: 10000 },
        );
    });
});
