import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyPokemonList from './pages/MyPokemonList';
import PokemonDetails from './pages/PokemonDetails';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/my-pokemon-list" exact component={MyPokemonList} />
            <Route path="/pokemon-details" exact component={PokemonDetails} />
          </Switch>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
