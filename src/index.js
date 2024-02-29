import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  const style = {}
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <main className="menu">
      <h2> Our Menu</h2>
      {numPizzas > 0 ? (
        // React Fragment
        // when we need to add a key <React.Fragment></React.Fragment>
        <>
          <p>
            Auathentic Italian cusine. 6 createive dishes to choose from. All
            from our stone oven, all organic, all deliciuos.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our Menu, please come back later.</p>
      )}
    </main>
  )
}

function Pizza({ pizzaObj }) {
  // early return
  // if (pizzaObj.soldOut) return null

  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients} </p>
          <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
        </div>
      </li>
    </>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 11
  const closeHour = 22

  const isOpen = hour >= openHour && hour <= closeHour

  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) alert ('We are currently open') ;
  // else alert ('Sorry we are close') ;

  return (
    <footer className="footer">
      {/* {new Date().toLocaleDateString()}. We are currently open. */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are close atm. We're happy to welcome you between {openHour}: 00
          and {closeHour}:00.
        </p>
      )}
    </footer>
  )
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        {new Date().toLocaleDateString()}. We are open from {openHour}:00 to{' '}
        {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  )
}
// React v.18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// strictMode during development kit will render the App twice and React will check if we are using outdated parts of the React API.

// React before 18
// React.render(<App />, document.getElementById('root'));
