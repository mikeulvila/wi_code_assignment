import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class CompletedCheckbox extends Component {

  constructor(props) {
    super(props);

    this.state = { checked: false }; //this.props.todo.completed
  }

  handleCheckbox() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    var msg;
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return (
      <span>
        <input
          onChange={ this.handleCheckbox.bind(this) }
          type="checkbox"
          defaultChecked={ this.state.checked }
        />
        <p>This box is {msg}</p>
      </span>
    );
  }

}
