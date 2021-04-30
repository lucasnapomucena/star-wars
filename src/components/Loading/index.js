import styled from "styled-components";

export const Loading = styled.div`
  border: 5px solid ${(props) => (props.bg ? props.bg : "")};
  border-left-color: ${(props) => (props.spinner ? props.spinner : "")};
  border-radius: 50%;
  width: ${(props) => (props.width ? props.width : "50px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  animation: spin 1s linear infinite;
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  display: flex;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
