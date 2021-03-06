import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './routes/home';
import Chat from './routes/chat';
import Login from './routes/login';
import Blood from './routes/tests';
import Info from './routes/info';
import Midwife from './routes/midwife';

class App extends Component {
  render() {
    return (
      <main>
        <Helmet defaultTitle="Your Midwife" />

        <div>
          <Switch location={this.props.location}>
            <Route path="/" exact component={Login} />
            <Route path="/chat" component={Chat} />
            <Route path="/tests" exact component={Blood} />
            <Route path="/info" exact component={Info} />
            <Route path="/midwife" exact component={Midwife} />
          </Switch>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default withRouter(connect(mapStateToProps)(App));
