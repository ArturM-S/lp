import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

interface ItemProps {
  isActive: boolean;
}

export const Container = styled.nav`
  display: initial;

  ${media.laptop} {
    display: none;
  }
`;

export const Content = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 2;

  width: 242px;
  height: 100vh;

  background: var(--primaryBgColor);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);

  padding: 42px;

  svg {
    align-self: flex-end;
  }

  ${media.laptop} {
    display: none;
  }
`;

export const NavigationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;

  padding-top: 24px;
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
