import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 400,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Cheese Overload Pizza",
    ingredients: "Tomato and Mozzarella",
    price: 500,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Meat Pizza",
    ingredients: "Tomato, Mozzarella , spinach, and ricotta cheese",
    price: 600,
    photoName: "pizzas/pizza10.jpg",
    soldOut: false,
  },
  {
    name: "Cheese Pizza",
    ingredients: "Tomato, Mozzarella, mushrooms, and onion",
    price: 350,
    photoName: "pizzas/pizza11.jpg",
    soldOut: false,
  },
  {
    name: "Meat Delight Pizza",
    ingredients: "Tomato, Mozzarella, and pepperoni",
    price: 650,
    photoName: "pizzas/pizza9.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, Mozzarella, ham, Arugula, and cheese",
    price: 700,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margarita",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 400,
    photoName: "pizzas/pizza2.jpg",
    soldOut: false,
  },
  {
    name: "Tandoori Chicken Pizza",
    ingredients: "Tomato and Mozzarella",
    price: 500,
    photoName: "pizzas/pizza3.jpg",
    soldOut: false,
  },
  {
    name: "Smokey Chicken Pizza",
    ingredients: "Tomato, Mozzarella, spinach, and ricotta cheese",
    price: 600,
    photoName: "pizzas/pizza4.jpg",
    soldOut: false,
  },
  {
    name: "Mexican Hot Pizza",
    ingredients: "Tomato, Mozzarella, mushrooms, and onion",
    price: 350,
    photoName: "pizzas/pizza5.jpg",
    soldOut: false,
  },
  {
    name: "BBQ Pizza",
    ingredients: "Tomato, Mozzarella, and pepperoni",
    price: 650,
    photoName: "pizzas/pizza8.jpg",
    soldOut: false,
  },
  {
    name: "Classy Supreme Pizza",
    ingredients: "Tomato, Mozzarella, ham, Arugula, and cheese",
    price: 700,
    photoName: "pizzas/pizza7.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Town</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 12 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `${pizzaObj.price} TK`}</span>
      </div>
    </li>
  );
}


function Footer() {
 
  return (
    <footer className="footer">
      <div className="order">
      <p>
        We're open from 11:00 AM to 11:00 PM. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
    </footer>
  );
}

export default App;
