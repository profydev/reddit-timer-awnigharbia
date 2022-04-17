import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../app/App';

function setup(initialPath = '/') {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );

  const footer = screen.getByRole('contentinfo');
  return { footer };
}

describe('Footer', () => {
  it('"Pofy.dev" pointing to the correct page', () => {
    const { footer } = setup();

    const profyLink = within(footer).getByRole('link', { name: 'profy.dev' });
    expect(profyLink.getAttribute('href')).toEqual(
      'https://profy.dev/employers',
    );
  });

  it('navigates to home page when logo is clicked', () => {
    setup('/search/javascript');

    const logoLink = screen.getByRole('link', { name: /logo-small\.svg/i });
    userEvent.click(logoLink);

    const header = screen.getByRole('heading', {
      name: /no reactions to your reddit posts/i,
    });
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
