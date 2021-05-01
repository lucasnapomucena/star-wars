import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: 23px;
  padding: 45px 52px;
  background-color: ${({ theme }) =>
    theme.backgroundColor ? theme.backgroundColor : ""};
  display: ${(props) => (props.display ? props.display : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};
`;
