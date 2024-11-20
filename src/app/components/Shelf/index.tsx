"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import './styles.scss'
// import { Container } from './styles';
// ★ ☆
interface Product {
  productId: number;
  productName: string;
  stars: number;
  price: number;
  listPrice: number;
  imageUrl: string;
  installments: [
    {
      quantity: number;
      value: number;
    }
  ];
}

const Shelf: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const stars = (stars: number) => {
    const starsArray = ["★", "★", "★", "★", "★", "☆", "☆", "☆", "☆", "☆"];
    return starsArray.slice(5 - stars, -stars);
  };

  useEffect(() => {
    axios
      .get("https://corebiz-test-server.onrender.com/api/v1/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  return (
    <section className="shelf">
      <h3 className="shelf__title">Mais Vendidos</h3>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
      >
        {products?.map((product) => {
          return (
            <SwiperSlide key={product.productId}>
              <article className="shelf__product">
                <img src={product.imageUrl} alt="imagem do produto" />
                <h4 className="shelf__product-name shelf__product-summary-info">{product.productName}</h4>
                <span className="shelf__product-stars shelf__product-summary-info">
                  {stars(product.stars)}
                </span>
                <p className="shelf__product-summary-info">
                  {product.listPrice &&
                    `de R$ ${(product.listPrice / 100).toFixed(2)}`}
                </p>
                <p className="shelf__product-price shelf__product-summary-info">
                  por R$ {(product.price / 100).toFixed(2)}
                </p>
                <p className="shelf__product-summary-info">
                  {product.installments.length > 0 &&
                    `ou em ${product.installments[0].quantity}x de R$ 
                    ${(product.installments[0].value / 100).toFixed(2)}`}
                </p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Shelf;
