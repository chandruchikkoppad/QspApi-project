import React, { Fragment } from 'react';
import Styles from './_navbar.module.css';

const Menu = () => {
  return (
    <div className={Styles.btn}>
      <a href="https://themeforest.net/checkout/91285929/create_account?_ga=2.125132490.1556889498.1672294399-2022456930.1663176550">
        <button className={Styles.btn1}>Buy now</button>
      </a>
    </div>
  );
}

export default Menu
