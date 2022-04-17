import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 133px;
  margin-bottom: 105px;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function InfoSection() {
  return (
    <InfoSectionWrapper>
      <SectionsWrapper>
        <HowItWorksSection />
        <AboutSection />
      </SectionsWrapper>
    </InfoSectionWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 738px;
  margin-bottom: 105px;
`;

const Header = styled.h1`
  margin-bottom: 12px;
`;

const HowItWorksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

function HowItWorksSection() {
  return (
    <Wrapper>
      <Header>How it works</Header>
      <HowItWorksList aria-label="how-it-works-list">
        <li>• We find the 500 top posts from the past year for a subreddit.</li>
        <li>
          • The data is visualized in a heatmap grouped by weekday and hour of
          the day.
        </li>
        <li>• See immediately when to submit your reddit post.</li>
      </HowItWorksList>
    </Wrapper>
  );
}

const AboutWrapper = styled(Wrapper)`
  margin-bottom: 105px;
`;

const Body = styled.p`
  margin-top: 0;
`;

const AboutLink = styled(Link)`
  color: #0087ff;
`;

function AboutSection() {
  return (
    <AboutWrapper>
      <Header>About</Header>
      <Body>
        This app was created during a course on{' '}
        <AboutLink as="a" href="https://profy.dev" target="_blank">
          profy.dev
        </AboutLink>{' '}
        with the goal to implement a pixel-perfect real-world application with
        professional workflows and tools like Kanban, Asana, Zeplin, GitHub,
        pull requests and code reviews.{' '}
        <AboutLink as="a" href="https://profy.dev/employers" target="_blank">
          Click here for more information
        </AboutLink>
        .
      </Body>
    </AboutWrapper>
  );
}
