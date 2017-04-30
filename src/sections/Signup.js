import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as formActions from '../actions/form';
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact Page</h1>
        <button onClick={() => this.setName()}>
          Button
        </button>
        <button onClick={() => this.setAge()}>
          Button2
        </button>
      </div>
    );
  }

  setName() {
    this.props.actions.setPerformerName('email');
  }

  setAge() {
    this.props.actions.setPerformerAge('age');
  }
}

function mapStateToProps(state, props) {
  return {
    form: state.form,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
