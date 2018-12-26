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
    $(document).ready(function () {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;
    
        trigger.click(function () {
          hamburger_cross();      
        });
    
        function hamburger_cross() {
    
          if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }
      
      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
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
