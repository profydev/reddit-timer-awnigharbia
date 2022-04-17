import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './logo-small.svg';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 980px;
  height: ${(props) => props.theme.size.footerHeight};
  margin: 0 auto;
  padding: 0 20px;
`;

export const LinkStyles = css`
  color: ${(props) => props.theme.color.link};
  font-size: ${(props) => props.theme.font.size.small};
  flex: 1;
`;

export const LeftLink = styled(Link)`
  ${LinkStyles}
  text-align: left;
`;

export const RightLink = styled(Link)`
  ${LinkStyles}
  text-align: right;
`;

export const Logo = styled(ReactComponent)`
  display: block;
`;
