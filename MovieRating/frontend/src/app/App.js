import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


import AppThemeProvider from './AppThemeProvider';
import AppLayout from './AppLayout';

import { Root } from './appStyles';


import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {

  return (
    <AppThemeProvider>

      <CssBaseline />

      <Root>

        <Switch>
          <Route path='/app' component={ AppLayout } />

          <Redirect to='/app' />
        </Switch>

      </Root>

    </AppThemeProvider>
  );
};


export default App;
