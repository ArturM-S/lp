import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

export const Container = styled.section``;

export const BannerContainer = styled.div`
  position: relative;
  margin-top: 0px;

  ${media.laptop} {
    margin-top: 94px;
  }
`;

export const Banner = styled.img`
  ${media.mobile} {
    width: 296.12px;
    height: 304.49px;

    margin-bottom: 32px;
  }

  position: relative;
  z-index: 1;
`;

export const Pattern = styled.img`
  position: absolute;
  left: 20px;
  top: 14px;

  width: 145px;
  height: 337px;

  ${media.mobile} {
    width: 83px;
    height: 191px;

    left: 10px;
    top: 4px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 638px;

  gap: 40px;

  ${media.mobile} {
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4rem;

  color: var(--primaryTextColor);

  ${media.mobile} {
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 443px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;

  color: var(--primaryTextColor);

  max-width: 625px;
`;
