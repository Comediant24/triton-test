import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from './layouts';
import { Main } from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/basket"></Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
