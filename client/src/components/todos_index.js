import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/index';
import AddTodo from './add_todo';

class TodosIndex extends Component {

  componentWillMount() {
    this.props.getTodos();
  }

  renderTodos() {
    return this.props.todos.map((todo) => {
      return (
        <li key={todo._id} className='list-group-item'>
          <div>{todo.todoItem}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <AddTodo />
        <ul className='list-group'>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
} //end class TodosIndex

function mapStateToProps(state) {
  return { todos: state.todos.all };
}

export default connect(mapStateToProps, { getTodos })(TodosIndex);
