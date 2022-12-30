const LightTheme = {
    primary: 'green',
};
const DarkTheme = {
    bg_m1: '#21252B',
    bg: '#333842',
    bg_p1: '#282C34',
    sidebar_bg: '#333842',
    primary: 'lightblue',
    shadow: 'rgba(20, 20, 20, 0.4)',
    border: 'rgba(200, 200, 200, 0.3)',
};

const Themes = [
    LightTheme,
    DarkTheme
];

let Theme = DarkTheme;

export const setTheme = (themeIndex) => {
    Theme = Themes[themeIndex];
};

export default Theme;
