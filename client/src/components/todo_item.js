import React, { Component } from 'react';

import CompletedCheckbox from './completed_checkbox';

class TodoItem extends Component {

  render() {
    const todo = this.props.todo;
    return (
        <li className='list-group-item'>
          <div>
            <span>{todo.todoItem}</span>
            <button onClick={ () => this.props.onDeleteClick(todo._id) }
              type="button" className="pull-xs-right close"
              aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </li>
    );
  }

};

export default TodoItem;
