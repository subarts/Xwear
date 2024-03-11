import React from "react"
import Image from "next/image"
import styles from "./../styles/Header.module.css"
const Header = () => {
  return (
    <header className=" bg-black h-[6.25rem] flex">
      <div className="wrapper flex w-[85.125rem] items-center justify-between">
        <Image src="./icons/logo.svg" width={84} height={34} alt="logo" />
        <nav className={styles.nav}>
          <select className={styles.selectList}>
            <option>Одежда </option>
          </select>
          <select className={styles.selectList}>
            <option>Обувь </option>
          </select>
          <select className={styles.selectList}>
            <option>Аксессуары </option>
          </select>
          <select className={styles.selectList}>
            <option>Бренды </option>
          </select>
          <button className="xexe">Расчет стоимости </button>
          <select className={styles.selectList}>
            <option>Информация </option>
            <option>Наш блог</option>
            <option>Наши контакты</option>
            <option>Доставка</option>
            <option>Оплата</option>
            <option>FAQ</option>
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
          <button className="flex items-center gap-2">
            <Image
              src="./icons/icon4.svg"
              alt="cart"
              width={16.6}
              height={19.6}
            />

            <ul className="flex items-center gap-2">
              <li className={styles.cartNumbers}>00000</li>
              <li className={styles.twoCard}>0</li>
            </ul>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
