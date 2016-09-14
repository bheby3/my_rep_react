import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import RepList from "./RepList";
import StateMenu from "./StateMenu";
import RepDetails from "./RepDetails";

import {getRepresentatives} from "../actions/";
import {getSenators} from "../actions/";
// import {getStates} from "../actions";

class HomeRep extends Component {

  constructor(props) {
    super(props);
  }

  submitReps(props) {
    var error = document.getElementById('toggle_error');
    var options = document.getElementsByClassName('selectRep');
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    if ((value[0] === "") && (value.length < 2)) {
      this.handleError('please select a state and representative')
    }
    if ((value[0] !== "") && (value.length < 2)) {
      this.handleError('please select representative')
    }
    if ((value[0] === "") && (value[1])) {
      this.handleError('please select a state')
    }

    else if (value.indexOf('representative') !== -1) {
      error.innerHTML = "";
      props.state = value[0];
      this.props.getRepresentatives(props)
        .then((response) => {
          if (response.error) {
            this.setState({
              error: 'Incorrect username and/or password.'
            });
          }
        });
    }
    else if (value.indexOf('senator') !== -1) {
      error.innerHTML = "";
      props.state = value[0];
      this.props.getSenators(props)
        .then((response) => {
          if (response.error) {
            this.setState({
              error: 'Incorrect username and/or password.'
            });
          }
        });
    }
  }


  handleError(error) {
    document.getElementById('toggle_error').display = "block";
    document.getElementById('toggle_error').innerHTML = error;
  }

  renderRepList() {
    if (this.props.reps) {
      return (
        <div>
          <RepList reps={this.props.reps.results}/>
        </div>
      )
    }
  }

  render() {


    return (
      <div>
        <h1 id="who_my_rep_title">
          <div>Who's My Representative</div>
        </h1>
        <div id="container">
          <section id="left_section">

            <StateMenu/>

            <div className="flex_column_center">
              <button id="myBtn" onClick={this.submitReps.bind(this)}>SUBMIT</button>
              <br/>
              <div id="toggle_error"></div>
              <h3 className="flex_row_start"> List / <span id="representatives">  Representatives</span></h3>
            </div>

            {this.renderRepList()}

          </section>

          <RepDetails/>

        </div>
      </div>

    );
  }
}


function validate(values) {
  const errors = {};
  return errors;
}

function mapStateToProps(state) {
  return {
    state: state.state,
    reps: state.reps.reps,
    // states: state.states
  };

}

export default reduxForm({
  form: "LoginForm",
  fields: ["state", "rep"],
  validate
}, mapStateToProps, {getRepresentatives, getSenators})(HomeRep);