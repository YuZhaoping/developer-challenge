import React from 'react';

import StylesProvider from '@material-ui/styles/StylesProvider';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';


import themes from './themes';


const AppThemeProvider = (props) => {
  const { children } = props;

  const theme = themes[0];


  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={ theme }>
        { children }
      </MuiThemeProvider>
    </StylesProvider>
  );
};


export default AppThemeProvider;
