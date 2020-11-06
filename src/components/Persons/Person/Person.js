import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  //context for class-based components without need to use AuthContext.Consumer
  static contextType=AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log("auth:", this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering....')
    return (
      <Aux>
       
        {this.context.authenticated? <p>Authenticated!</p> : <p>Please log in</p>}
        
        <p onClick={this.props.click}>
          I'm {this.props.name}! and I am {this.props.age} years Old!
        </p>
        <p>{this.props.children}</p>
        <input
          //ref={(inputEl)=> {this.inputElement=inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);