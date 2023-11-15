import { useState, useEffect } from 'react'
import PeopleView from './components/PeopleView'
import './App.css'
const peopleList = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 24},
];
function App() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(peopleList);
  useEffect(()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res)=>res.json())
    .then((data)=>console.log(data.value));
  },[]);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
        <PeopleView people={people} name="Holger" age="9"/>
        <button onClick={() => setPeople(
          (people) => [...people, {name: 'New Person', age: 99}])}>
          Add new Person</button>
          <button onClick={() => setPeople([...people.slice(0,people.length-1)])}>Remove last Person</button>
      </div>
    </>
  )
}
const person = "John Doe"
const name = "John Doe"

export default App
export { person, name}
