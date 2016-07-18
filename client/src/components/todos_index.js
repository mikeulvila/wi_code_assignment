import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, updateTodo, deleteTodo } from '../actions/index';
import AddTodo from './add_todo';
import TodoItem from './todo_item';


class TodosIndex extends Component {

  componentWillMount() {
    this.props.getTodos();
  }

  onDeleteClick(id) {
    let todos = this.props.todos;
    const todoIndex = todos.findIndex((todo) => {
      return todo._id === id;
    });
    todos.splice(todoIndex, 1);
    this.setState({ all: todos });
    this.props.deleteTodo(id);
  }

  renderTodoItems() {
    return this.props.todos.map((todo) => {
      return (
        <TodoItem key={todo._id} todo={todo} onDeleteClick={this.onDeleteClick.bind(this)} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <AddTodo />
        <ul className='list-group'>
          {this.renderTodoItems()}
        </ul>
        <div className="alert alert-success">{this.props.message}</div>
      </div>
    );
  }
} //end class TodosIndex

function mapStateToProps(state) {
  return { todos: state.todos.all,
           message: state.todos.message
          };
}

export default connect(mapStateToProps, { getTodos, updateTodo, deleteTodo })(TodosIndex);
