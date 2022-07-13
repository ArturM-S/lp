import styled from '@emotion/styled';
import { media } from '../../../shared/styles';

export const Container = styled.div`
  width: 100vw;
  min-height: 477px;
  background: #870a28;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 122px;

  padding: 84px 0;

  ${media.mobile} {
    flex-direction: column;
    gap: 52px;
  }
`;

export const VerticalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 24px;

  ${media.mobile} {
    align-items: center;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 101px;
  height: 45px;
`;

export const Text = styled.p`
  cursor: pointer;

  max-width: 213px;

  font-weight: 400;
  font-size: 1rem;

  color: #ffffff;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 26px;

  svg {
    cursor: pointer;
  }
`;
