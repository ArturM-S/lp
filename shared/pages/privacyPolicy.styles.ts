import styled from '@emotion/styled';
import { media } from '../styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 0 70px 156px 70px;

  ${media.mobile} {
    padding: 0 32px 120px 32px;
  }
`;

export const TitleBox = styled.div`
  height: 687px;
  width: 638px;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 68px;

  text-align: center;

  ${media.mobile} {
    width: 300px;
    height: 129px;

    margin-top: 220px;
    margin-bottom: 220px;
  }
`;

export const Title = styled.h1`
  font-family: 'Ubuntu';
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 4.0625rem;
`;

export const TopicTitle = styled.h2`
  font-family: 'Ubuntu';
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.75rem;
`;

export const SubTopic = styled.li`
  font-family: 'Ubuntu';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

export const Text = styled.h4`
  font-family: 'Ubuntu';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
`;
