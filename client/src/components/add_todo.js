import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { newTodo: '' };
  }

  onInputChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const todo = {
      todoItem: this.state.newTodo,
      completed: false
    }
    this.props.addNewTodoToList(todo);
    this.props.addTodo(todo);
    this.setState({ newTodo: '' });
    console.log('input value: ', this.state.newTodo);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Add Todo"
          className="form-control"
          onChange={this.onInputChange.bind(this)}
          value={this.state.newTodo}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Add</button>
        </span>
      </form>
    );
  }

}

export default connect(null, { addTodo })(AddTodo);
