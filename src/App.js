import './App.css';

function App() {
  const product = [
    {name: 'Computer', prise: '$99.56'},
    {name: 'Laptop', prise: '$59.51'},
    {name: 'Mobile', prise: '$49.86'}
  ]

  const foods = ['Apple', 'Banana', 'Mango']
  foods.forEach(food => console.log(food))

  return (
    <div className="App">
      <header className="App-header">
        <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product>
      </header>
    </div>
  );
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
