'use client'
import axios from "axios";
import React, { useState } from "react";
import './styles.scss'

const Newsletter: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://corebiz-test-server.onrender.com/api/v1/newsletter", {
        name,
        email,
      })
      .then((res) => {
        console.log(res);
        alert("Obrigado por se inscrever!");
        // clear fields after sending
        setName("");
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
        alert("Ocorreu um erro. Tente novamente mais tarde.");
      });
  };

  return (
    <section className="newsletter__container">
      <h2>Participe de nossas news com promoções e novidades</h2>
      <form onSubmit={handleSubmit} className="newsletter__form">
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Eu quero!</button>
      </form>
    </section>
  );
};

export default Newsletter;