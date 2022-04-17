import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent } from '../../assets/sign.svg';

const FooterLogo = styled(ReactComponent)`
  display: block;
`;

const FooterLink = styled(Link)`
  flex: 1;
  color: ${(props) => props.theme.color.link};
`;

const TermsLink = styled(FooterLink)`
  text-align: right;
`;

const FooterStyled = styled.footer`
  display: flex;
  width: 100%;
  max-width: 940px;
  margin: auto;
  padding: 32px 20px;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <FooterLink as="a" href="https://profy.dev/employers" target="_blank">
        profy.dev/employers
      </FooterLink>
      <Link to="/">
        <FooterLogo />
      </Link>
      <TermsLink to="/terms">Terms & Privacy</TermsLink>
    </FooterStyled>
  );
}
