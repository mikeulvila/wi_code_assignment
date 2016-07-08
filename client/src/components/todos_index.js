import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, updateTodo, deleteTodo } from '../actions/index';
import AddTodo from './add_todo';
import CompletedCheckbox from './completed_checkbox';

class TodosIndex extends Component {

  componentWillMount() {
    console.log('this.props inside TodosIndex: ', this.props);
    this.props.getTodos();
  }

  updateCompleted(todo) {
    console.log('todo checkbox', todo);
    todo.completed = !todo.completed;
    console.log('todo after update: ', todo);
    this.props.updateTodo(todo);
  }

  onDeleteClick(id) {
    console.log('delete id: ', id);
    this.props.deleteTodo(id);
  }

  renderTodos() {
    console.log('this.props inside TodosIndex: ', this.props);
    return this.props.todos.map((todo) => {
      return (
        <li key={todo._id} className='list-group-item'>
          <div>
            <input onChange={ () => this.updateCompleted(todo) } type="checkbox" checked={todo.completed} />
            <span>{todo.todoItem}</span>
            <button onClick={ () => this.onDeleteClick(todo._id) } type="button" className="pull-xs-right close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <CompletedCheckbox />
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
  console.log('state inside mapStateToProps: ', state)
  return { todos: state.todos.all };
}

export default connect(mapStateToProps, { getTodos, updateTodo, deleteTodo })(TodosIndex);
