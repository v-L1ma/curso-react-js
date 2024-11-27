import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Lista from './components/Lista';

function App() {  

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome='Vinicius' />
      <Lista />
    </div>
  );
}

export default App;
