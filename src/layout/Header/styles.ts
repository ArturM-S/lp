import styled from '@emotion/styled';
import { media } from '../../../shared/styles';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 74px;

  background: var(--primaryBgColor);

  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);

  z-index:99;

  ${media.laptop} {
    padding: 36px 0;
    height: 52px;

    margin-top: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1440px;

  padding: 32px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;

  cursor: pointer;
`;
