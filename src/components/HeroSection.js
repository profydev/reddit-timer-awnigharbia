import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from '../assets/table.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.font.family.headline};
  font-weight: 400;
  font-size: ${(props) => props.theme.font.size.headline};
  color: black;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 45px;
`;

const Button = styled.button`
  text-decoration: none;
  color: white;
  border-radius: 4px;
  padding: 13.5px 15px;
  background-color: #fdb755;
`;

const Subreddit = styled.h4`
  color: #93918f;
  font-weight: 500;
`;

const HeatMap = styled(ReactComponent)`
  display: block;
`;

export default function HeroSection() {
  return (
    <Wrapper>
      <Title>No Reactions to your reddit posts?</Title>
      <Subtitle>
        Greate timing, great results! Find the best time to post on your
        subreddit
      </Subtitle>
      <Button as={Link} to="/search/javascript">
        SHOW ME THE BEST TIME
      </Button>
      <Subreddit>r/javascript</Subreddit>
      <Link to="/search/javascript">
        <HeatMap />
      </Link>
    </Wrapper>
  );
}
