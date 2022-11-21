const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

function alpha(variableName) {
  // some tailwind magic to allow us to specify opacity with CSS variables (eg: bg-desktop/80)
  // https://tailwindcss.com/docs/customizing-colors#using-css-variables
  return `hsla(var(${variableName}), <alpha-value>)`;
}

module.exports = function(app, options) {
  console.log(options)
  /*  if (desktop === 'webpage') {
      config.plugins.push(require('@tailwindcss/typography'));
    }*/
  return {
    content: [
      !options?.ignorePackages && '../../libs/*/src/**/*.{ts,tsx,html}',
      app ?
          `../../apps/${app}/**/*.{ts,tsx,html}` :
          `./src/**/*.{ts,tsx,html}`,
    
    
    ],
    theme: {
     
    },
    plugins: [
      require('@tailwindcss/forms'),
  
    ],
  };
};
