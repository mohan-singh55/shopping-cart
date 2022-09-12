import Items from "./Items";
import { useState, useEffect } from "react";
// import { AppContext } from "./ContextCart";
import { useContext } from "react";
import { AppContext } from "./ContextCart";

const ItemList = () => {
  let { cart, setCart, count, setCount } = useContext(AppContext);

  // const item = useContext(AppContext);
  // console.log(item);

  const [item, setItem] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setItem(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper">
        {item.map((currElm) => {
          return <Items key={currElm.id} item={{ ...currElm }} />;
        })}

        {/* <Items items={{...item}} /> */}
      </div>
    </>
  );
};

export default ItemList;
