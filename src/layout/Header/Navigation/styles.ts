import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

interface ItemProps {
  isActive: boolean;
}

export const Container = styled.nav`
  display: none;

  ${media.laptop} {
    display: flex;
  }

  align-items: center;
  gap: 40px;

  button {
    margin-left: 37px;
  }
`;

export const Item = styled.span<ItemProps>`
  font-weight: 300;
  height: 24px;
  cursor: pointer;

  color: var(--primaryTextColor);

  &:hover {
    border-bottom: 2.5px solid var(--primaryTextColor);
  }

  ${props =>
    props.isActive &&
    css`
      border-bottom: 2.5px solid var(--primaryTextColor);
      font-weight: 400;
    `}
`;
