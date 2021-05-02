import styled from "styled-components";

export const Loading = styled.div`
  border: 5px solid ${({ bg }) => (bg ? bg : "")};
  border-left-color: ${({ spinner }) => (spinner ? spinner : "")};
  border-radius: 50%;
  width: ${({ width }) => (width ? width : "50px")};
  height: ${({ height }) => (height ? height : "50px")};
  animation: spin 1s linear infinite;
  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-left: ${({ ml }) => (ml ? ml : "")};
  display: flex;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
