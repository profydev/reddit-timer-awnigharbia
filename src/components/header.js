import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent } from '../assets/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 41px 80px;
`;

const Logo = styled(ReactComponent)`
  display: block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #636363;
  margin-left: 26px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <StyledLink to="/search/javascript">Search</StyledLink>
        <StyledLink to="/#how-it-works">How it works</StyledLink>
        <StyledLink to="/#about">About</StyledLink>
      </nav>
    </StyledHeader>
  );
}
