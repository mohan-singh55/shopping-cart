import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import { CartContext } from "./Cart";
import { AppContext } from "./ContextCart";
// import { useReducer } from "react";
// import reducer from "./reducer";

const Items = ({ item }) => {
  let { addToCart, cart, removeFromCart } = useContext(AppContext);

  const { category, title, description, id, image, price } = item;

  return (
    <>
      <ItemWrapper className="item-wrapper">
        <picture>
          <img src={image} alt="" />
        </picture>
        <div className="title-wrapper">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="quantity">
          {/* <i className="fa fa-minus" aria-hidden="true"></i>
            <input type="text" value="0" onChange={() => {}} />
            <i className="fa fa-plus" aria-hidden="true"></i> */}
          {cart.some((i) => i.id === item.id) ? (
            <span className="btn remove-btn" onClick={() => removeFromCart(id)}>Remove from cart</span>
          ) : (
            <span className="btn" onClick={() => addToCart(item)}>Add to cart</span>
          )}
        </div>

        <div className="price">₹{price}</div>

        {/* <div className="remove-item">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div> */}
      </ItemWrapper>
    </>
  );
};

export default Items;

// css starts from here

const ItemWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  /* height: 12rem; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 3rem 5rem;
  gap: 10rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;

  picture {
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }

  .title-wrapper {
    margin: 0 0rem 0 2rem;
    width: 50%;
    .title {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
    }
    .description {
      font-size: 1.6rem;
      font-weight: 400;
      color: gray;
    }
  }

  .quantity {

    .btn {
      font-size: 1.7rem;
      font-weight: 500;
      /* width: 10rem; */
      display: inline-block;
      text-align: cenetr;
      cursor: pointer;
      background-color: green;
      color: #fff;
      padding: 0.7rem 2rem;
      border-radius: 0.5rem;
      border: 2px solid green;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: #fff;
        color: green;
        /* border: 2px solid green; */
        transition: 0.3s ease-in-out;
      }
    }
    .remove-btn {
      background-color: #D61C4E;
      border: 2px solid #D61C4E;

      &:hover {
      color: #D61C4E;
      /* border: 2px solid #D61C4E; */
    }
    }
  }
  .price {
    font-size: 1.8rem;
    font-weight: 600;
  }
  .remove-item {
    i {
      font-size: 1.6rem;
      color: crimson;
      cursor: pointer;
    }
  }
`;
