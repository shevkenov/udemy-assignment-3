import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Toolbar from './containers/Toolbar/Toolbar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          {/* <Route path='/courses/:id' component={Course} /> */}
          <Redirect path='/all-courses' to='/courses' />
          <Route render={() => <h1>404 error</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
