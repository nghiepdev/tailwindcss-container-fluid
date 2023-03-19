const plugin = require('tailwindcss/plugin');

const containerFluid = plugin.withOptions((options = {spacing: 3}) => {
  return ({addComponents, theme}) => {
    const breakPoints = ['2xl', 'xl', 'lg'];
    const breakpoint = breakPoints.find(breakpoint => {
      return theme(`screens.${breakpoint}`);
    });
    if (breakpoint) {
      addComponents({
        '.container-fluid': {
          paddingLeft: theme(`spacing.${options.spacing}`),
          paddingRight: theme(`spacing.${options.spacing}`),
          [`@media (max-width: ${theme(`screens.${breakpoint}`)})`]: {
            maxWidth: theme('maxWidth.full'),
          },
          [`@media (min-width: ${
            parseFloat(theme(`screens.${breakpoint}`)) +
            parseFloat(theme(`spacing.${options.spacing}`)) * 2 * 16
          }px)`]: {
            paddingLeft: theme('spacing.0'),
            paddingRight: theme('spacing.0'),
          },
        },
      });
    }
  };
});

module.exports = containerFluid;
