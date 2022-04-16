import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './theme';

function setup() {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('Header', () => {
  it('"/" points to the correct page', () => {
    setup();

    const link = screen.getByRole('link', { name: 'logo.svg' });
    userEvent.click(link);

    const header = screen.getByRole('heading', { name: /home page/i });
    expect(header).toBeInTheDocument();
  });

  it('"/Search/Subreddit" points to the correct page', () => {
    setup();

    const link = screen.getByRole('link', { name: /search/i });
    userEvent.click(link);

    const header = screen.getByRole('heading', { name: /search/i });
    expect(header).toBeInTheDocument();
  });

  it('#How it works and #about are exists', async () => {
    setup();
    screen.getByRole('link', { name: /How it works/i });
    screen.getByRole('link', { name: /about/i });
  });
});

describe('Footer', () => {
  it('"Pofy.dev" pointing to the correct page', () => {
    setup();

    const link = screen.getByText('profy.dev');
    screen.debug(link);
    expect(link).toHaveAttribute('href', 'https://profy.dev/employers');
  });

  it('"FooterLogo" points to the correct page', () => {
    setup();

    const link = screen.getByRole('link', { name: 'sign.svg' });
    userEvent.click(link);

    const header = screen.getByRole('heading', { name: /home page/i });
    expect(header).toBeInTheDocument();
  });

  it('"Terms" points to the correct page', () => {
    setup();

    const link = screen.getByRole('link', { name: /terms/i });
    userEvent.click(link);

    const header = screen.getByRole('heading', { name: /terms/i });
    expect(header).toBeInTheDocument();
  });
});
