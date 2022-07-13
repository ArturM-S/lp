import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

interface ContainerProps {
  variant: 'white' | 'yellow';
}

interface ContentProps {
  isReverse?: boolean;
  isCenter?: boolean;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;

  background: ${props =>
    props.variant === 'white'
      ? 'var(--primaryBgColor)'
      : 'var(--secondaryBgColor)'};
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: ${props => (props.isReverse ? 'column-reverse' : 'column')};

  justify-content: ${props => (props.isCenter ? 'center' : 'space-between')};

  align-items: center;

  width: 100%;
  max-width: 1440px;

  padding: 96px 32px;

  gap: 32px;

  position: relative;

  ${media.laptop} {
    flex-direction: ${props => (props.isCenter ? 'column' : 'row')};
    gap: 40px;
  }
`;
