import React from 'react';
import * as S from './Info.style';

function Info({ id, headline, children }) {
  return (
    <S.Article id={id}>
      <S.Headline>{headline}</S.Headline>

      <S.Content>{children}</S.Content>
    </S.Article>
  );
}

export default Info;
