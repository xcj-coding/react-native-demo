import * as theme from '../theme';

const defaultTheme = theme.getTheme();

const themeRD = (state = defaultTheme, action) => {
    if (action.type == 'CHANGE_THEME'){
        return action.newTheme;
    }
    return state;
}

export default themeRD;
