import light from './light';
import dark  from './dark';
import fetch from './fetch';

const themes = {
  light,
  dark,
  fetch,
};

let defaultTheme = light;

export const getThemeList = () => Object.keys(themes);

export const getTheme = () => defaultTheme;

export const setTheme = (theme) => defaultTheme = themes[theme];

export default defaultTheme;
