import React from "react";
import "../Header/header.scss";
import Item from "../Item/Item";
import Footer from '../Footer/Footer'

function Header() {
  return (
    <div className="main">
      <section className="todos__section">
        <div className="container">
          <h1 className="todos__heading">todos</h1>
          <form className="todos__form">
            <input className="todos__input" type="text" />
            <button className="visually-hidden" type="button">
              Add
            </button>
          </form>
          <ul className="todos__list">
            <Item>Wake up</Item>
            <Item>Check your phone</Item>
            <Item>Have a shover</Item>
            <Item>Have a breakfast</Item>
            <Item>Do some exercise</Item>
          </ul>
      <Footer></Footer>
        </div>
      </section>
    </div>
  );
}

export default Header;

// Sug'rutalovchilar va qayta sug'urtalovchilarning to'lova qobiliyati to'g'risidagi nizom 2008 12-may 1806 sonli ro'yhat
