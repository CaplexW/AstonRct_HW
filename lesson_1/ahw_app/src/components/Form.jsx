import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    console.warn('componentDidMount');
    console.info('This function calls when component is mounted');
    console.info('It accepts no arguments and can be used to take some actions after render, like getting access to render result:');

    const form = document.getElementById('classed-form');
    console.log(form);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.warn('shouldComponentUpdate')
    console.info('If this function returns true, the component will be updated');
    console.info('It accepts changed props:');
    console.log(nextProps);
    console.info('And changed state:');
    console.log(nextState);

    return (this.state !== nextState);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.warn('getSnapshotBeforeUpdate');
    console.info('If shouldComponentUpdate returns true, this function calls.');
    console.info('It accepts previos props:');
    console.log(prevProps);
    console.info('and previos state:');
    console.log(prevState);
    console.info('as an arguments.');
    console.info('It returns value that can be used in componentDidUpdate method as snapshot');

    return '"Value returned form getSnapshotBeforeUpdate method"';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.warn('componentDidUpdate');
    console.info('This function calls after component was updated');
    console.info('It accepts as an arguments previos props:');
    console.log(prevProps);
    console.info('previos state:');
    console.log(prevState);
    console.info('and a snapshot recived form getSnapshotBeforeUpdate method:');
    console.log(snapshot);
  }

  componentWillUnmount(arg) {
    console.warn('componentWillUnmount');
    console.info('This function calls when component is going to unmount. It recived no arguments and can bu used to remove stuff that is irrelevant without this component.');
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
      <form onSubmit={this.submit} id='classed-form'>
        {childrenWithProps}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;