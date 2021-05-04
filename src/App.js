// component = function that returns JSX
/*
 * function components definition
 *
 * function MyComponent {props} {
 *  return <div></div>;
 * }
 *
 * component instance
 *
 * <MyComponent title = "My ArticleCard .. "/>
 *
 *
 * **/

import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const pokemon_Data = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  // before 'return': javaScript code

  return (
    // inside 'return': HTML code

    <main className="container">
      <Title content="My APP" />
      <div className="row">
        {pokemon_Data.map((pokemon, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
