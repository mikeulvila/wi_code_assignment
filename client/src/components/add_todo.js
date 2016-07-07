import React, { Component, PropTypes } from 'react';

class AddTodo extends Component {

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Add Todo"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Add</button>
        </span>
      </form>
    );
  }

}

export default AddTodo;
