"use client";
import React, { useEffect, useState } from "react";

// import { Container } from './styles';

const Header: React.FC = () => {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(0);
  }, []);

  const toDo = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <header>
      <img src="/assets/icons/logo.svg" alt="Logo" />
      <search>
        <form onSubmit={(e) => toDo(e)}>
          <input type="text" placeholder="O que você está procurando" />
          <button type="submit">
            <img src="/assets/icons/search.svg" alt="Buscar" />
          </button>
        </form>
      </search>
      <button tabIndex={0}>
        <img src="/assets/icons/avatar.svg" alt="Minha Conta" />
        Minha Conta
      </button>
      <button tabIndex={1}>
        <img src="/assets/icons/cart.svg" alt="carrinho" />
        <span>{cartItems}</span>
      </button>
    </header>
  );
};

export default Header;
