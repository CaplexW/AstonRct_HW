import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { name, value, onChange, type = 'text', placeholder } = this.props;

    return (
      <div className='row'>
        <label htmlFor={name}>{placeholder || name + ' '}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
