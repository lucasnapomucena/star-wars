import styled from "styled-components";
import { device } from "../../theme";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  font-size: 23px;
  padding: 45px 52px;
  background-color: ${({ theme }) =>
    theme.backgroundColor ? theme.backgroundColor : ""};
  display: ${(props) => (props.display ? props.display : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};

  @media (max-width: ${device.tablet}) {
    padding: 32px 16px;
  }
`;
