import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions/index';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = { checked: this.props.todo.completed };
  }

  handleCheckbox() {
    this.setState({ checked: !this.state.checked }, () => {

      this.props.updateTodo({
        todoItem: this.props.todo.todoItem,
        completed: this.state.checked
      }, this.props.todo._id);

    });
  }

  render() {

    const todo = this.props.todo;
    const checked = this.state.checked;

    return (
        <li className='list-group-item'>
          <div>

            <input
              className='checkbox'
              onChange={ this.handleCheckbox.bind(this) }
              type="checkbox"
              defaultChecked={ checked }
            />

            <span className={ checked ? 'completed' : '' }> {todo.todoItem}</span>

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

export default connect(null, { updateTodo })(TodoItem);
