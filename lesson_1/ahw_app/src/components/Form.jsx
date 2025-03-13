import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  changeInputData = ({ name, value }) => {
    this.setState((prevState) => ({ data: { ...prevState.data, [name]: value } }));
  }
  submit = (e) => {
    e.preventDefault();
    alert(`Submiting form with email: ${this.state.data.email}, password: ${this.state.data.password}, age: ${this.state.data.number}`);
    if (this.props.onSubmit) this.props.onSubmit(this.state.data);
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      if (!React.isValidElement(child)) return child;

      const name = child.props.name;
      const childProps = {
        value: this.state.data[name] || '',
        onChange: (e) => this.changeInputData({ name, value: e.target.value }),
      };
      return React.cloneElement(child, childProps);
    })

    return (
      <form onSubmit={this.submit}>
        {childrenWithProps}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;