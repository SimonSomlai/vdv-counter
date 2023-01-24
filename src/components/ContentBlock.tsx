import React from 'react';
import styled from 'styled-components';

const PRIMARY_COLOR = '#006417';
const Wrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Title = styled.p`
  background-color: ${PRIMARY_COLOR};
  color: #ffffff;
  margin: 0;
  padding: 8px;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  border: 1px solid ${PRIMARY_COLOR};
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const ContentBlock: React.FC<{
  title: string;
  children?: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};
