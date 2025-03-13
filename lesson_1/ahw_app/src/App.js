import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Input from './components/Input'

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
        <Form onSubmit={(data) => { console.log(`You have submited data:${data}`) }}>
          <Input name='email' />
          <Input name='password' type='password' />
          <Input name='number' type='number' />
        </Form>
      </header>
    </div>
  );
}

export default App;
