import { useContext } from "react";
import { AppContext } from "./ContextCart";
import { useState, useEffect } from "react";
import styled from "styled-components";

const CartItemList = () => {
  const RemoveItem = () => {};

  const {
    cart,
    isCartItemList,
    closeCartList,
    isBodyOverlay,
    increaseQuantityHandle,
    decreaseQuantityHandle,
    removeFromCart,
  } = useContext(AppContext);

  //   console.log("cart item list", cart);

  return (
    <>
      <BodyOverlay className={`${isBodyOverlay ? "active" : ""}`}></BodyOverlay>

      <CartWrapper
        className={`cart-list ${
          isCartItemList ? "cartItem_open" : "cartItem_close"
        }`}
      >
        <div className="cart-header">
          <p>Cart {cart.length}</p>
          <div className="close_btn_circle" onClick={closeCartList}>
            <i className="fa fa-times"></i>
          </div>
        </div>

        {cart.length > 0 ? (
          cart.map(
            ({ category, title, description, id, image, price, quantity }) => {
              return (
                <div key={id}>
                  <div className="top-items">
                    <picture>
                      <img src={image} alt="" />
                    </picture>
                    <div className="title-wrapper">
                      <div className="title">{title}</div>
                      <div className="description">{description}</div>
                      <div>
                        <div className="price">Price per item - ₹{price}</div>
                        <div className="price">
                          Total price - ₹{(price * quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-btn">
                    <div className="quantity">
                      <i
                        className="fa fa-minus"
                        aria-hidden="true"
                        onClick={() => {
                          decreaseQuantityHandle(id);
                        }}
                      ></i>
                      <span className="input-value">{quantity}</span>
                      <i
                        className="fa fa-plus"
                        aria-hidden="true"
                        onClick={() => {
                          increaseQuantityHandle(id);
                        }}
                      ></i>
                    </div>

                    <div className="quantity">
                      <span className="remove-btn" onClick={() => removeFromCart(id)}>
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <p className="no-item">Missing Cart items</p>
        )}

        <div className="total-price-wrapper">
          <span className="total-price">Total Amount -</span>
          <span className="total-price">₹
            {cart
              .map((p) => {
                return p.price * p.quantity;
              })
              .reduce((p1, p2) => {
                // return <span className="total-price">₹{p1+p2}</span>
                return p1 + p2;
              }, 0).toFixed(2)}
          </span>
        </div>
      </CartWrapper>
    </>
  );
};

export default CartItemList;

// css starts from here

const BodyOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-out 0s;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

const CartWrapper = styled.section`
  position: fixed;
  right: -70rem;
  top: 0px;
  z-index: 15;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 60rem;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
  border-top: 1px solid #f0f0f0;
  padding: 2rem;
  gap: 0rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-height: 100vh;
  overflow-y: scroll;

  &.cartItem_open {
    right: 0;
    transition: 0.4s ease-in-out;
  }
  &.cartItem_close {
    right: -70rem;
    transition: 0.4s ease-in-out;
  }

  .no-item {
    line-height: 30vh;
    font-size: 2rem;
    border-top: 1px solid #f1f1f1;
    width: 100%;
    text-align: center;
  }

  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem 2rem;
    background-color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    p {
      color: #2a55e5;
      font-size: 1.8rem;
      font-weight: 500;
      border-bottom: 2px solid #2a55e5;
    }
    .close_btn_circle {
      transition: all 0.45s cubic-bezier(0.4, 0.25, 0.3, 1.3);
      width: 40px;
      height: 40px;
      top: 4rem;
      right: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #2a3a57;
      border-radius: 50%;
      cursor: pointer;
      i {
        transition: all 0.4s cubic-bezier(0.4, 0.25, 0.3, 1.3) 0.1s;
        font-size: 14px;
      }
    }
  }

  .top-items {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0rem;
    gap: 5rem;
    border-top: 1px solid #f0f0f0;
  }

  .bottom-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 3rem;
    gap: 10rem;
  }

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
    /* margin: 0 0rem 0 2rem; */
    width: 70%;
    .title {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
    }
    .description {
      font-size: 1.5rem;
      font-weight: 400;
      color: #878787;
    }
  }

  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;

    .input-value {
      width: 5rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      outline: 0;
      margin: 0 1.5rem;
      font-size: 1.6rem;
      border-radius: 0.2rem;
      border-radius: 2px;
      background-color: #fff;
      border: 1px solid #c2c2c2;
    }
    i {
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.7rem;
      border-radius: 100%;
      background: linear-gradient(#fff, #f9f9f9);
      display: inline-block;
      border: 1px solid #c2c2c2;
    }

    .remove-btn {
      font-size: 1.7rem;
      font-weight: 500;
      /* width: 10rem; */
      display: inline-block;
      text-align: cenetr;
      cursor: pointer;
      background-color: #D61C4E;
      color: #fff;
      padding: 0.7rem 2rem;
      border-radius: 0.5rem;
      border: 2px solid #D61C4E;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: #fff;
        color: #D61C4E;
        /* border: 2px solid green; */
        transition: 0.3s ease-in-out;
      }
    }
  }
  .price {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  .remove-item {
    i {
      font-size: 1.6rem;
      color: crimson;
      cursor: pointer;
    }
  }

  .total-price-wrapper {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 7rem;
    border-top: 1px solid #f1f1f1;
    width: 100%;
    padding: 2rem 2rem 0;
    font-size: 1.7rem;
    font-weight: 500;
  }
`;
