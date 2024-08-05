import logo from './logo.svg';
import './App.css';

import ReverseWords from './reverse-words/ReverseWords';
import StringRepeat from './string-repeat/StringRepeat';
import Grasshopper from './grasshopper/Grasshopper';
import PipeProblem from './mario-bros/PipeProblem';
import RemoveElement from './remove-element/RemoveElement';
import MonkeyCount from './monkey-count/MonkeyCount';
import ReverseSequence from './reverse-sequence/ReverseSequence';
import MeanArray from './mean-array/MeanArray';
import ReallyGood from './im-good/ReallyGood';
import FakeBinary from './fake-binary/FakeBinary';

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
      <Grasshopper /> 
      <PipeProblem /> 
      <RemoveElement /> 
      <MonkeyCount /> 
      <ReverseSequence />
      <MeanArray /> 
      <ReallyGood /> 
      <FakeBinary />
      


    </div>
  );
}

export default App;
