import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../app/App';

function setup(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );
}
describe('Header', () => {
  it('navigates to homepage when logo is clicked', () => {
    setup('/search/javascript');

    const link = screen.getByRole('link', { name: /logo\.svg/i });
    userEvent.click(link);

    const header = screen.getByRole('heading', {
      name: /no reactions to your reddit posts/i,
    });
    expect(header).toBeInTheDocument();
  });

  it('navigates to search page when search link is clicked.', () => {
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
