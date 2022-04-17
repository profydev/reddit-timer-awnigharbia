import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import App from '../app/App';
import theme from '../style/theme';

function setup() {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('HeroSection', () => {
  it('Containts title, subtitle and default subreddit', () => {
    setup();
    const title = screen.getByRole('heading', {
      name: /no reactions to your reddit posts/i,
    });
    const subtitle = screen.getByText(
      /greate timing, great results! Find the best time to post on your subreddit/i,
    );
    const defaultSubreddit = screen.getByText(/r\/javascript/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(defaultSubreddit).toBeInTheDocument();
  });

  it('"Show me the best time" points to correct page', () => {
    setup();
    const button = screen.getByRole('link', {
      name: /show me the best time/i,
    });
    userEvent.click(button);

    const header = screen.getByRole('heading', {
      name: /searching for the best time to post onjavascript/i,
    });

    expect(header).toBeInTheDocument();
  });

  it('"heapmap image" points to correct page', () => {
    setup();
    const button = screen.getByRole('img', {
      name: /screenshot of heatmap/i,
    });
    userEvent.click(button);

    const header = screen.getByRole('heading', {
      name: /searching for the best time to post onjavascript/i,
    });

    expect(header).toBeInTheDocument();
  });
});

describe('Info section', () => {
  test('contains links pointing to profy home and employers page', () => {
    setup();

    const aboutSection = screen.getAllByRole('article')[1];

    const profyLink = within(aboutSection).getByRole('link', {
      name: /profy\.dev/i,
    });
    expect(profyLink.getAttribute('href')).toEqual('https://profy.dev');

    const moreInfoLink = within(aboutSection).getByRole('link', {
      name: /click here for more information/i,
    });
    expect(moreInfoLink.getAttribute('href')).toEqual(
      'https://profy.dev/employers',
    );
  });
});
