const DefaultDimens = {
    spacerS: 12,
    spacerM: 24,
    spacerL: 48,
};
const RoomyDimens = {
    primary: 'lightblue',
};

const DimenThemes = [
    DefaultDimens,
    RoomyDimens,
];

let Dimens = DefaultDimens;

export const setDimenTheme = (themeIndex) => {
    Dimens = DimenThemes[themeIndex];
};

export default Dimens;