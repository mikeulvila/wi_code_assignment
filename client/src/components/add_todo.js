import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: '' };
  }

  onInputChange(event) {
    this.setState({ todoItem: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addTodo({
      todoItem: this.state.todoItem,
      completed: false
    });
    console.log('input value: ', this.state.todoItem);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Add Todo"
          className="form-control"
          onChange={this.onInputChange.bind(this)}
          value={this.state.todoItem}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Add</button>
        </span>
      </form>
    );
  }

}

export default connect(null, { addTodo })(AddTodo);
