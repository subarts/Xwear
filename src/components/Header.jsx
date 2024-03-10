import React from "react"
import Image from "next/image"
import styles from "./modulesCss/Header.module.css"
const Header = () => {
  return (
    <header className="wrapper bg-black  flex flex-row w-[85.125rem] h-[6.25rem] items-center gap-[7.5rem]">
      <h1 className={styles.h1}>
        <span>X</span>WEAR
      </h1>
      <nav className={styles.nav}>
        <select>
          <option>Одежда </option>
        </select>
        <select>
          <option>Обувь </option>
        </select>
        <select>
          <option>Аксессуары </option>
        </select>
        <select>
          <option>Бренды </option>
        </select>
        <button>Расчет стоимости </button>
        <select>
          <option>Информация </option>
        </select>
      </nav>
      <div className={styles.buttonsList}>
        <button>
          <Image
            src="./icons/icon1.svg"
            alt="search"
            width={17.6}
            height={19.6}
          />
        </button>
        <button>
          <Image
            src="./icons/icon2.svg"
            alt="favorite"
            width={18.6}
            height={19.6}
          />
        </button>
        <button>
          <Image
            src="./icons/icon3.svg"
            alt="account"
            width={12.6}
            height={19.6}
          />
        </button>
        <button>
          <Image
            src="./icons/icon4.svg"
            alt="cart"
            width={16.6}
            height={19.6}
          />
        </button>
        {/* <ul> цена корзины и количество в корзине
          <li className={styles.cartNumbers}>00000</li>
          <li className={styles.twoCard}>0</li>
        </ul> */}
      </div>
    </header>
  )
}
export default Header
