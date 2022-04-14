import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 41px 80px;
`;

const Img = styled.img`
  display: block;
`;

const StyledNav = styled.nav`
  a {
    margin-left: 26px;
    text-decoration: none;
    color: #636363;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Img src={Logo} />
      </Link>
      <StyledNav>
        <Link to="/search">Search</Link>
        <Link to="/#how-it-works">How it works</Link>
        <Link to="/#about">About</Link>
      </StyledNav>
    </StyledHeader>
  );
}
