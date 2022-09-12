import "./App.css";
import CartItemList from "./components/CartItemList";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CartItemList />
      <Header />
      <ItemList />
    </>
  );
}

export default App;
