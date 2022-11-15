import foto from './image/foto.png'
import './App.css';
import ComponenteA from './components/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-logo" alt="foto" />
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
