import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1440px;

  position: relative;
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
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 4rem;

  color: var(--primaryTextColor);

  ${media.mobile} {
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 288px;
  }
`;

export const DesktopLineBreak = styled.br``;

export const MobileLineBreak = styled.br`

`;

export const Subtitle = styled.p`


  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;

  color: var(--primaryTextColor);

  max-width: 625px;
`;

export const BannerContainer = styled.div`
  position: relative;
  text-align:center;
  padding-left:32px;
`;

export const Banner = styled.img`
  ${media.mobile} {
    width: 296.12px;
    height: 304.49px;

    margin-bottom: 32px;
  }

  /* width: 518px; */
  height: 537px;

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

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  margin-top: 130px;

  span {
    display: none;
  }

  ${media.laptop} {
    width: 100%;
    max-width: 1300px;
    height: 163px;

    background-color: var(--primaryBgColor);
    box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
    border-radius: 20px;

    position: absolute;
    bottom: -200px;
    z-index: 1;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 96px;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2px;
`;

export const StatTitle = styled.h3`
  font-weight: 700;
  font-size: 2.1rem;

  color: var(--primaryTextColor);
`;

export const StatSubtitle = styled.p`
  font-weight: 300;
  font-size: 1rem;

  color: var(--primaryTextColor);
`;

export const Divider = styled.span`
  width: 1px;
  height: 80px;

  background: rgba(255, 222, 0, 0.7);
`;
