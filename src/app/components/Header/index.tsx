"use client";
import { UseCart } from "@/app/utils/CartContext";
import React from "react";
import "./styles.scss";
// import { Container } from './styles';

const Header: React.FC = () => {
  const { cartItems } = UseCart();
  // const [cartItems, setCartItems] = useState(0);

  const toDo = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <header className="header">
      <img src="/assets/icons/logo.svg" alt="Logo" />
      <search className="header__search">
        <form className="header__search-form" onSubmit={(e) => toDo(e)}>
          <input className="header__search-input" type="text" placeholder="O que você está procurando" tabIndex={0}/>
          <button className="header__search-button" type="submit">
            <img src="/assets/icons/search.svg" alt="Buscar" />
          </button>
        </form>
      </search>
      <button className="header__my-account" tabIndex={1}>
        <img className="header__my-account--image" src="/assets/icons/avatar.svg" alt="Minha Conta" />
        Minha Conta
      </button>
      <button className="header__cart" tabIndex={2}>
        <img className="header__cart-image" src="/assets/icons/cart.svg" alt="carrinho" />
        <span className="header__cart-number-items">{cartItems}</span>
      </button>
    </header>
  );
};

export default Header;
