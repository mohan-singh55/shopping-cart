import { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./ContextCart";
// import reducer from "./reducer";

const Header = () => {


  
  let { cart, openCartList } = useContext(AppContext);

  return (
    <>
      <HeaderWrapper className="header">
        <div className="left-area">
          <h4>Continue Shopping</h4>
        </div>
        <div className="right-area">
          <div className="shopping-cart" onClick={() => {
                openCartList();
              }}>
            <i className="fas fa-shopping-cart"></i>
            <p className="count">{cart.length}</p>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;

// css starts from here

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 2rem auto;
  position: sticky;
  top: 0;

  color: rgb(255, 255, 255);
  z-index: 10;
  padding: 3.5rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.25);
  background: linear-gradient(148.92deg, #58bbf2 13.69%, #00288caf 88.85%);

  .left-area {
    h4 {
      font-size: 2.2rem;
      color: #222;
      font-weight: 600;
    }
  }

  .right-area {
    .shopping-cart {
      position: relative;
      cursor: pointer;

      i {
        font-size: 3rem;
      }
      .count {
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 2.5rem;
        top: -1.5rem;
        left: 1.5rem;
        background-color: #85cb33;
        color: #212121;
        font-size: 1.8rem;
        border-radius: 400px;
        transition: all ease 1s;
        z-index: 1;
        font-weight: 500;
      }
    }
  }
`;
