import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../theme";

export const Box = styled.div`
  padding-top: 104.15px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${device.tablet}) {
    padding-top: 0;
  }
`;

export const ButtonTopLeft = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
  svg {
    margin-right: 16px;
    fill: ${({ theme }) => theme.textColor};
  }
`;

export const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.backgroundColor};
  line-height: 19.5px;
  height: 56px;
  max-width: 360px;
  width: 100%;
  padding: 0 18px;
  transition: 0.3s;

  &::active,
  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: ${device.tablet}) {
    margin-top: 35px;
    order: 2;
  }
`;

export const Image = styled.div`
  display: flex;
  max-width: 380px;
  max-height: 380px;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 91px;

  @media (max-width: ${device.tablet}) {
    margin-top: 112px;
  }
`;

export const Text = styled.p`
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  line-height: 43.88px;
  margin-top: 18px;

  @media (max-width: ${device.tablet}) {
    margin-top: 20px;
  }
  strong {
    font-weight: 700;
  }
`;
