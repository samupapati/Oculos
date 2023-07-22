import CartPage from "./components/cart/CartPage";
import Menu from "./components/menu/Menu";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Products/>
      <CartPage/>
    </div>
  );
}

export default App;
