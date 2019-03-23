import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './routes/home';

class App extends Component {
  render() {
    return (
      <main>
        <Helmet defaultTitle="Medgongukonur" />

        <div>
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
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