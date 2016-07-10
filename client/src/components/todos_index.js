import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, updateTodo, deleteTodo } from '../actions/index';
import AddTodo from './add_todo';
import TodoItem from './todo_item';


class TodosIndex extends Component {

  componentWillMount() {
    console.log('this.props inside TodosIndex: ', this.props);
    this.props.getTodos();
  }

  addNewTodoToList(todo) {
    let todos = this.props.todos;
    todos.push(todo);
    this.setState({ all: todos });
  }

  updateCompleted(todo) {
    console.log('todo checkbox', todo);
    todo.completed = !todo.completed;
    console.log('todo after update: ', todo);
    this.props.updateTodo(todo);a
  }

  onDeleteClick(id) {
    console.log('delete id: ', id);
    console.log('this inside delete', this);
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

  // renderTodos() {
  //   console.log('this.props inside TodosIndex: ', this.props);
  //   return this.props.todos.map((todo) => {
  //     return (
  //       <li key={todo._id} className='list-group-item'>
  //         <div>
  //           <input onChange={ () => this.updateCompleted(todo) } type="checkbox" checked={todo.completed} />
  //           <span>{todo.todoItem}</span>
  //           <button onClick={ () => this.onDeleteClick(todo._id) } type="button" className="pull-xs-right close" aria-label="Close">
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //       </li>
  //     );
  //   });
  // }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <AddTodo  addNewTodoToList={this.addNewTodoToList.bind(this)} />
        <ul className='list-group'>
          {this.renderTodoItems()}
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
