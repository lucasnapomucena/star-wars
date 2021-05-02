import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../theme';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 72px;
  text-align: center;
  color: ${({ theme }) => theme.textColor};

  @media (max-width: ${device.mobileL}) {
    font-size: 52px;
  }
  strong {
    font-family: 'Lato';
    font-weight: 700;
  }
`;

export const Subtitle = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor};
  line-height: 17.07px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.35em;
  margin-top: 8px;

  @media (max-width: ${device.tablet}) {
    font-size: 12px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.35em;
  line-height: 22px;
  font-size: 18px;
  margin-top: 162px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.textColor};
  max-width: 189px;
  width: 100%;
  height: 56px;
  color: ${({ theme }) => theme.backgroundColor};
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: ${device.tablet}) {
    margin-top: 62px;
  }
`;
