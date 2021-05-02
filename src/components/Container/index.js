import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  font-size: 23px;
  padding: 45px 52px;
  background-color: ${({ theme }) =>
    theme.backgroundColor ? theme.backgroundColor : ""};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
`;
