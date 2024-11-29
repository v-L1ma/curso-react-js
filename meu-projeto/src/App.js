import './App.css';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';


function App() {  
  const meusItems = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderizando listas</h1>
      <OutraLista itens={meusItems} />
    </div>
  );
}

export default App;
