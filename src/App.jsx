import {useState, useEffect} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    console.log("Pokemon")
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0/")
      .then(res => console.log(res))
      .then(res => setPokemon(res.all))
      .catch(err => console.log(err))
  }, [])
  


  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0/")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
      .catch(err => console.log(err))
    }

  return (
    <div className = "App">
      <button className = "btn btn-primary" onClick={getPokemon}>Fetch Pokemon</button>
      {
        pokemon.map ((p,i) => {
          return <PokemonCard
                    pokemon={p}
                    key={i}
                    />
        })
      }
    </div>
  );
}

export default App;