import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './routes/home';
import Chat from './routes/home';

class App extends Component {
  render() {
    return (
      <main>
        <Helmet defaultTitle="Medgongukonur" />

        <div>
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </div>

      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default withRouter(connect(mapStateToProps)(App));