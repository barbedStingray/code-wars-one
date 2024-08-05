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
import SearchDuplicates from './search-duplicates/SearchDuplicates';
import InverseValues from './inverse-values/InverseValues';
import AddLength from './add-length/AddLength';
import SquareSum from './square-sum/SquareSum';
import VowelRemover from './vowel-remover/VowelRemover';
import ReverseOrder from './reverse-order/ReverseOrder';
import SumPositive from './sum-positive/SumPositive';
import SpeedCode from './speed-code/SpeedCode';
import FootballScore from './football-score/FootballScore';
import ReduceGrow from './reduce-grow/ReduceGrow';
import CountSheep from './count-sheep/CountSheep';


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

{/* Use Loops */}
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
      <SearchDuplicates /> 

{/* Definitely Loops */}
    <InverseValues /> 
    <AddLength />
    <SquareSum />
    <VowelRemover />
    <ReverseOrder />
    <SumPositive /> 
    <SpeedCode /> 
    <FootballScore /> 
    <ReduceGrow />
    <CountSheep /> 



    </div>
  );
}

export default App;
