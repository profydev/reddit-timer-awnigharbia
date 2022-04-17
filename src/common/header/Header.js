import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as S from './Header.style';
import DefaultSubreddit from '../../constants/Constants';

export default function Header() {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo />
      </Link>
      <nav>
        <S.Link to={`/search/${DefaultSubreddit}`}>Search</S.Link>
        <S.Link to="/#how-it-works" as={HashLink}>
          How it works
        </S.Link>
        <S.Link to="/#about" as={HashLink}>
          About
        </S.Link>
      </nav>
    </S.Container>
  );
}
