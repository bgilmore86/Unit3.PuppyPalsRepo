import {useState} from 'react'
import './App.css'
import {puppyList} from './data.js'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("featPupId: ", setPuppies);

  return (
      <div className="App">
    {
        puppies.map((puppy) => {
          return <p onClick={() =>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })
    }
    {
       puppies.map((puppy) => {
        return <p>{puppy.name}</p>
      })
    }
        </div>
     );
  }

export default App
