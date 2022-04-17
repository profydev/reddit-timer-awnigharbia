import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent } from './logo.svg';

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;
  height: ${(props) => props.theme.size.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(ReactComponent)`
  display: block;
`;

export const Link = styled(UnstyledLink)`
  color: ${(props) => props.theme.color.link};
  margin-left: 26px;
`;
