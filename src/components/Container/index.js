import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: 23px;
  padding: 45px 52px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;
