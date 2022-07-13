import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  width: 100vw;

  justify-content: center;
  align-items: center;
`;

export const ButtonRightBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;

  transition: 0.2s;

  svg {
    &:hover {
      color: #515151;
    }
  }
  align-self: end;
`;

export const ButtonLeftBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;

  transition: 0.2s;

  svg {
    &:hover {
      color: #515151;
    }
  }
  align-self: start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0 auto;
  min-height: 405px;

  position: relative;

  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 20px;

  padding: 44px 32px;

  animation: showup 1s linear normal;
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

  background: rgba(255, 222, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 65px;
    height: 53px;
  }
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
