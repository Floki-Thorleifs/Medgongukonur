import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import Users from '../../components/users/Users';

//import '../../components/signin/SignIn.scss';

//todo hafa token a signin
class Midwife extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="chatwrapper">
          <Sidebar />
          <Users />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Midwife;
