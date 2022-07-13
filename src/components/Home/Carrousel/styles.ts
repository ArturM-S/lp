import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

interface ContentProps {
  position: number;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  gap: 32px;

  max-width: 1440px;
`;

export const ButtonRightBox = styled.div`
  position: absolute;
  z-index: 13;
  right: 0;
  height: 0;
  top: 50%;
  cursor: pointer;

  transition: 0.2s;

  svg {
    &:hover {
      color: #515151;
    }
  }
`;

export const ButtonLeftBox = styled.div`
  position: absolute;
  z-index: 13;
  height: 0;
  left: 0;
  top: 50%;
  cursor: pointer;

  transition: 0.2s;

  svg {
    &:hover {
      color: #515151;
    }
  }
`;

export const LimitRight = styled.div`
  height: 100%;

  background: linear-gradient(to left, rgba(255, 255, 255, 1), transparent);
  z-index: 10;
  position: absolute;

  top: 0;
  right: 0;

  ${media.laptop} {
    display: none;
  }

  ${media.desktop} {
    display: initial;
  }

  ${media.large} {
    width: 200px;
  }
`;
export const LimitLeft = styled.div`
  height: 100%;
  z-index: 10;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), transparent);

  position: absolute;

  top: 0;
  left: 0;

  ${media.laptop} {
    display: none;
  }

  ${media.desktop} {
    display: initial;
  }

  ${media.large} {
    width: 200px;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;

  gap: 22px;
  min-width: 387px;
  min-height: 405px;

  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 20px;

  padding: 44px 32px;

  transform: translateX(${props => props.position}px);

  transition: 1s;

  ${media.mobile} {
    width: 296px;
    height: 378px;

    padding: 29px 36px;
  }
`;

export const Card = styled.div`
  position: absolute;
  width: 100vw;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Legend = styled.p`
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.625rem;

  color: rgba(0, 0, 51, 0.4);
`;

export const Icon = styled.div`
  width: 65px;
  height: 53px;

  img {
    width: 65px;
    height: 53px;
  }

  background: rgba(255, 222, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primaryTextColor);
`;

export const Description = styled.p`
  color: var(--primaryTextColor);
  max-width: 305px;
  font-size: 0.8125rem;
  line-height: 1.625rem;
  font-weight: 300;

  color: var(--primaryTextColor);
`;
