import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders now more link', () => {
    const { getByText } = render( < App / > );
    const linkElement = getByText(/Know more/i);
    expect(linkElement).toBeInTheDocument();
});