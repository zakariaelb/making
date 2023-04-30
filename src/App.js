import logo from './logo.svg';
import './App.css';

import React, { useEffect } from "react"

export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})

//     // 1. GET the data (fetch)
//     // 2. Save the data to state
    
//     // loop infinit console.log("Component rendered")

//     // fetch("https://swapi.dev/api/people/1")
//     //     .then(res => res.json())
//     //     //.then(data => setStarWarsData(data))
//     //     .then(data => console.log(data))
 
 
//     // side effects
 
//     React.useEffect( function(){
//       fetch("https://swapi.dev/api/people/1")
//           .then(res => res.json())
//           .then(data => setStarWarsData(data))
//           .then(data => console.log(data))
//     })     

//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

const [starWarsData, setStarWarsData] = React.useState({})
const [count, setCount] = React.useState(0)

    // 1. GET the data (fetch)
    // 2. Save the data to state
    
    // loop infinit console.log("Component rendered")

    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     //.then(data => setStarWarsData(data))
    //     .then(data => console.log(data))
 
 
    // side effects
 
    React.useEffect( function(){
      fetch("https://swapi.dev/api/people/1")
          .then(res => res.json())
          .then(data => setStarWarsData(data))
          .then(data => console.log(data))
    }, [count])     

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}
