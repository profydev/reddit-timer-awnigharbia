import React from 'react';
import { Link } from 'react-router-dom';
import DefaultSubreddit from '../../constants/Constants';
import * as S from './HeroSection.style';

export default function HeroSection() {
  return (
    <S.Section>
      <S.Headline>No Reactions to your reddit posts?</S.Headline>
      <S.Subline>
        Greate timing, great results! Find the best time to post on your
        subreddit
      </S.Subline>
      <S.Button to={`/search/${DefaultSubreddit}`}>
        SHOW ME THE BEST TIME
      </S.Button>
      <S.DefaultSubreddit>
        r/
        {DefaultSubreddit}
      </S.DefaultSubreddit>
      <Link to={`/search/${DefaultSubreddit}`}>
        <S.Image src="/images/table.svg" alt="Screenshot of heatmap" />
      </Link>
    </S.Section>
  );
}
