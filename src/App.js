import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name: 'Computer', prise: '$99.56'},
    {name: 'Laptop', prise: '$59.51'},
    {name: 'Tab', prise: '$49.86'},
    {name: 'Mobile', prise: '$39.86'}
  ]

  const fruits = ['Apple', 'Banana', 'Mango', 'Jackfruit', 'Pineapple', 'Orange']
  return (
    <div className="App">
      <header className="App-header">

        <Users></Users>
        
        <Counter></Counter>

        <ul>
          {fruits.map((fruit => <li>{fruit}</li>))}
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })

  return (
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
  )
}

function Counter() {
  const [count, setCount] = useState(10)
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {

  const productStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    width: '500px'
  }

  const {name, prise} = props.product

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{prise}</h4>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
