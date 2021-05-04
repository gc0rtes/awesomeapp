//export default function Pokemon(props) {
//   return (
//     <div>
//       <h2>Pokemon name: {props.name}</h2>
//       <p>Weight: {props.weight} kg</p>
//       <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
//       <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
//       <p>Abilities({props.abilities.length}): </p>
//       <ul>
//         {props.abilities.map((ability, index) => {
//           return <li key={index}>{ability}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

//Let's turn each Pokemon component instance into a card (with a list group inside of it)!
import "./Pokemon.scss";
export default function Pokemon(props) {
  return (
    <div className="Pokemon card shadow-sm mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability, index) => {
          return (
            <li key={index} className="list-group-item">
              {ability}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// NOTE: when rendering elements or components with .map, React requires that each element/component that is returned within the callback of .map has a unique key prop. This key prop must be something unique that we can identify this element with - ideally an ID, but an index will suffice if don't have an ID. For more information: https://reactjs.org/docs/lists-and-keys.html#keys

// teste
// const all_pokemon = [
//   { name: "Charizard", weight: 90 },
//   { name: "Bulbasaur", weight: 6.9 },
//   { name: "Mewtwo", weight: 122 },
//   { name: "Mega beedrill", weight: 65 },
// ];

// const printingWeigth = all_pokemon.map((pokemon) => {
//   return console.log(`${pokemon.name} : ${pokemon.weight}kg`);
// });
