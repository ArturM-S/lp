import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 56px;
  color: white;
  background-color: #870a28;

  position: relative;
  z-index: 1;

  span {
    display: none;
  }

  ${media.laptop} {
    width: 100%;
    max-width: 1300px;
    height: 163px;

    background-color: #870a28;
    color: white;
    box-shadow: 5px 10px 10px 10px rgba(0, 0, 51, 0.08);
    border-radius: 20px;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 96px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 2px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 2.1rem;
`;

export const Subtitle = styled.p`
  font-weight: 300;
  font-size: 1rem;
`;

export const Divider = styled.span`
  width: 1px;
  height: 80px;

  background: green;
`;
