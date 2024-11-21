"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import axios from "axios";
import "./styles.scss";
import { Product } from "@/app/utils/types";
import ProductSummary from "../productSummary";
import 'swiper/css';
import 'swiper/css/navigation';
// import { Container } from './styles';
// ★ ☆

const Shelf: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://corebiz-test-server.onrender.com/api/v1/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? null : (
    <section className="shelf">
      <h3 className="shelf__title">Mais Vendidos</h3>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation:{
              enabled: false
            }
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation:{
              enabled: false
            }
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        
        }}
        slidesPerGroup={1}
        spaceBetween={60}
        loop={true}
        navigation={{enabled: true}}
        modules={[Navigation]}
        className="shelf__slider"
      >
        {products?.map((product) => {
          return (
            <SwiperSlide key={product.productId}>
              <ProductSummary {...product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Shelf;
