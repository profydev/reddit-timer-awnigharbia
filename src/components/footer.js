import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent } from '../assets/sign.svg';

const FooterLogo = styled(ReactComponent)`
  display: block;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.color.link};
  text-decoration: none;
`;

const FooterAnchor = styled.a`
  color: ${(props) => props.theme.color.link};
  text-decoration: none;
`;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 250px;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <FooterAnchor to="https://profy.dev/employers" target="_blank">
        profy.dev
      </FooterAnchor>
      <Link to="/">
        <FooterLogo />
      </Link>
      <FooterLink to="/terms">Terms & Privacy</FooterLink>
    </FooterStyled>
  );
}
