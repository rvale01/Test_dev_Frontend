import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { PersistGate } from 'redux-persist/integration/react'
import {store} from './store';
import {persistor} from './store'
import { Provider } from 'react-redux';
import Question1 from './Question1';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Special from './Special'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Question2 from './Question2';

const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home {...props} />
            </Route>
            <Route exact path="/question1">
              <Question1 {...props} />
            </Route>
            <Route exact path="/question2">
              <Question2 {...props} />
            </Route>
            <Route exact path="/question3">
              <Question3 {...props} />
            </Route>
            <Route exact path="/question4">
              <Question4 {...props} />
            </Route>
            <Route exact path="/question5">
              <Question5 {...props} />
            </Route>
            <Route exact path="/question6">
              <Question6 {...props} />
            </Route>
            <Route exact path="/special">
              <Special {...props} />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider >
  );
}

export default App;
