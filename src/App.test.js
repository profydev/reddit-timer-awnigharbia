import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
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
