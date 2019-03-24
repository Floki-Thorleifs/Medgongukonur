import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
import { fetchBlood } from '../../api/thunk/blood';
import {connect} from 'react-redux';



class Bloodtest extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            isLoading: false,
            blood: null,
            error: null,
    }
}
componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBlood('/'));
  }


	render() {
        const { blood } = this.props;
        if(blood.size){
		const days = blood.map((i, index) => {
			return <Day blood={i} key={index} />;
		});
        return <div className="testResults">{days}</div>;
    }return( 
    <React.Fragment>
    <h1 className='testResults'>Nothing here to see</h1>
    </React.Fragment>);

	}

  static propTypes = {
    data: PropTypes.array
  };
  state = {
    isClicked: false
  };
  render() {
    const handleClick = () => {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
    };
    const { data } = this.props;
    const days = data.map((i, index) => {
      return <Day data={i} key={index} />;
    });
    if (this.state.isClicked) {
      return (
        <React.Fragment>
          <label className="newTest" onClick={handleClick}>
            Cancel
          </label>
          <NewTest />
          <div className="testResults">{days}</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <label className="newTest" onClick={handleClick}>
          Enter results
        </label>
        <div className="testResults">{days}</div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
    return {
      isLoading: state.blood.isLoading,
      blood: state.blood.blood,
      error: state.blood.error
    };
  };
export default connect(mapStateToProps)(Bloodtest);
