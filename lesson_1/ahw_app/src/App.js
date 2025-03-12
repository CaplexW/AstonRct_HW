import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';
import Input from './components/input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormComponent onSubmit={() => { console.log('submiting...')}}>
          <Input name='e-mail' />
          <Input name='password' type='password' />
          <Input name='number' type='number' />
        </FormComponent>
      </header>
    </div>
  );
}

export default App;
