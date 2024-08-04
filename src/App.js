import logo from './logo.svg';
import './App.css';

import ReverseWords from './reverse-words/ReverseWords';
import StringRepeat from './string-repeat/StringRepeat';

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
      </header>

      <ReverseWords />
      <StringRepeat /> 

    </div>
  );
}

export default App;
