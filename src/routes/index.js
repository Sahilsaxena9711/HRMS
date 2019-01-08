import React from 'react'
import { createHashHistory } from 'history';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import createStore from '../store/createStore';

import Login from '../containers/Login';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import UserMonthly from '../containers/UserMonthly';
// const appHistory = useRouterHistory(createHashHistory)({});

class App extends React.Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    

    $(document).ready(function() {   
      var sideslider = $('[data-toggle=collapse-side]');
      var sel = sideslider.attr('data-target');
      var sel2 = sideslider.attr('data-target-2');
      sideslider.click(function(event){
          $(sel).toggleClass('in');
          $(sel2).toggleClass('out');
      });
  });
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch >
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/usermonthly" component={UserMonthly} />
              <Route exact component={Error} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
