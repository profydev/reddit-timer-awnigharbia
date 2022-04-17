import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from '../../assets/table.svg';
import DefaultSubreddit from '../../constants/Constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 45px;
`;

const Button = styled.button`
  color: white;
  border-radius: 4px;
  padding: 13.5px 15px;
  background-color: ${({ theme }) => theme.color.button};
`;

const Subreddit = styled.h4`
  color: #93918f;
  font-weight: 500;
`;

const HeatMap = styled(ReactComponent)`
  display: block;
  max-width: 100%;
`;

export default function HeroSection() {
  return (
    <Wrapper>
      <Title>No Reactions to your reddit posts?</Title>
      <Subtitle>
        Greate timing, great results! Find the best time to post on your
        subreddit
      </Subtitle>
      <Button as={Link} to={`/search/${DefaultSubreddit}`}>
        SHOW ME THE BEST TIME
      </Button>
      <Subreddit>
        r/
        {DefaultSubreddit}
      </Subreddit>
      <Link to={`/search/${DefaultSubreddit}`}>
        <HeatMap />
      </Link>
    </Wrapper>
  );
}
