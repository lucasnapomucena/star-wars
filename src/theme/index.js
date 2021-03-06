import { darken } from 'polished';

export const device = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const darkTheme = {
  backgroundColor: '#2B2B2B',
  textColor: '#FFFFFF',
  primary: '#2B2B2B',
  light: darken(0.05, '#2B2B2B'),
  img: ['./images/darth-vader.png'],
};

export const lightTheme = {
  backgroundColor: '#FBFE63',
  textColor: '#2A2A2A',
  primary: '#FBFE63',
  light: darken(0.05, '#FBFE63'),
  img: ['./images/luke-skywalker.png'],
};

export const defaultTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#2c97d1',
  primary: '#2c97d1',
  light: darken(0.5, '#FFFFFF'),
};
