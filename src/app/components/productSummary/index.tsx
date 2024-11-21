import { UseCart } from "@/app/utils/CartContext";
import { LocalStorageCart, Product } from "@/app/utils/types";
import React from "react";
// import { Container } from './styles';

const productSummary = (props: Product) => {
  const { updateCart } = UseCart();
  const stars = (stars: number) => {
    const starsArray = ["★", "★", "★", "★", "★", "☆", "☆", "☆", "☆", "☆"]; // array of stars
    return starsArray.slice(5 - stars, -stars);
  };

  const addToCart = (productId: number) => {
    const products = JSON.parse(localStorage.getItem("cart") || "[]"); // get cart from local storage
    let quantity = 0;
    const productIndex = products.findIndex(
      (product: Product) => product.productId === productId //try to find product in cart
    );
    products.forEach((element: LocalStorageCart) => {
      quantity += element.quantity;
    });
    if (productIndex >= 0) {
      products[productIndex].quantity += 1; // increment quantity
      localStorage.setItem("cart", JSON.stringify(products));
      console.log(products);
    } else {
      products.push({ productId: productId, quantity: 1 }); // add to cart
      localStorage.setItem("cart", JSON.stringify(products));
      console.log(products);
    }
    updateCart(quantity + 1);
  };

  return (
    <article className={`shelf__product `}>
      {props.price < props.listPrice ? (
        <span className="shelf__product-image--highlighted">
          <p>OFF</p>
        </span>
      ) : null}
      <img
        src={props.imageUrl}
        alt="imagem do produto"
        loading="lazy"
        className={`shelf__product-image `}
      />
      <div className="shelf__product-summary-info-container">
        <h4 className="shelf__product-name shelf__product-summary-info">
          {props.productName}
        </h4>
        <span className="shelf__product-stars shelf__product-summary-info">
          {stars(props.stars)}
        </span>
        <p className="shelf__product-summary-info shelf__product-price-list-price">
          {props.listPrice && `de R$ ${(props.listPrice / 100).toFixed(2)}`}
        </p>
        <p className="shelf__product-price shelf__product-summary-info">
          por R$ {(props.price / 100).toFixed(2)}
        </p>
        <p className="shelf__product-summary-info shelf__product-installments">
          {props.installments?.length > 0 &&
            `ou em ${props.installments[0].quantity}x de R$ 
          ${(props.installments[0].value / 100).toFixed(2)}`}
        </p>
        <button
          className="shelf__product-buy-button"
          onClick={() => addToCart(props.productId)}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
};

export default productSummary;
