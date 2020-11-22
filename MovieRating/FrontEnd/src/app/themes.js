import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import grey from '@material-ui/core/colors/grey';


const variants = [
  {
    name: "Default",
    body: {
      background: grey[100]
    }
  }
];


const theme = variant => {
  const muiTheme = createMuiTheme(
    {
      spacing: 4,
      props: {
        MuiButtonBase: {
          disableRipple: true
        }
      },
      shadows: Array(25).fill("none"),
      body: {
        ...variant.body
      }
    },
    variant.name
  );

  return muiTheme;
};


const themes = variants.map(variant => theme(variant));

export default themes;
