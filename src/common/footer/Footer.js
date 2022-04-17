import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.style';

export default function Footer() {
  return (
    <S.Container>
      <S.LeftLink as="a" href="https://profy.dev/employers" target="_blank">
        profy.dev
      </S.LeftLink>
      <Link to="/">
        <S.Logo />
      </Link>
      <S.RightLink to="/terms">Terms & Privacy</S.RightLink>
    </S.Container>
  );
}
