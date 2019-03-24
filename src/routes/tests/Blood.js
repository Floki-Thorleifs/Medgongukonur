import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import BloodTest from '../../components/bloodtest/Bloodtest';
import { normalize } from 'path';

import '../../components/bloodtest/bloodtest.scss';

//todo hafa token a signin
class Blood extends Component {
  render() {
    return (
      <div className="bloodwrapper">
<<<<<<< HEAD
        <Sidebar />
        <div className="wrapwrap">
          <BloodTest />
          <Footer />
        </div>
=======
        <Sidebar site="tests"/>
        <BloodTest />
        <Footer />
>>>>>>> 0754b50ae84ecc2eb8b9af21d1f3213cd38b8345
      </div>
    );
  }
}

export default Blood;
