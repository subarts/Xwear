import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./../styles/Header.module.css"
const Header = () => {
  return (
    <header className=" bg-black h-[6.25rem] flex">
      <div className="wrapper flex w-[85.125rem] items-center justify-between">
        <Image src="./icons/logo.svg" width={84} height={34} alt="logo" />
        <nav className={styles.nav}>
          <div className={styles.menuBlock}>
            <button className={styles.navButton}>Одежда</button>

            <ul className={styles.menuList}>
              <li>
                <Link href={"./blog"}>Наш Блог</Link>
              </li>
              <li>
                <Link href={"./blog"}>Контакты</Link>
              </li>
              <li>
                <Link href={"./blog"}>Доставка</Link>
              </li>
              <li>
                <Link href={"./blog"}>Оплата</Link>
              </li>
              <li>
                <Link href={"./blog"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuBlock}>
            <button className={styles.navButton}>Обувь</button>

            <ul className={styles.menuList}>
              <li>
                <Link href={"./blog"}>Кроссовки</Link>
              </li>
              <li>
                <Link href={"./blog"}>Кеды</Link>
              </li>
              <li>
                <Link href={"./blog"}>Сандали</Link>
              </li>
              <li>
                <Link href={"./blog"}>Шлепки</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuBlock}>
            <button className={styles.navButton}>Акссесуары</button>

            <ul className={styles.menuList}>
              <li>
                <Link href={"./blog"}>Наш Блог</Link>
              </li>
              <li>
                <Link href={"./blog"}>Контакты</Link>
              </li>
              <li>
                <Link href={"./blog"}>Доставка</Link>
              </li>
              <li>
                <Link href={"./blog"}>Оплата</Link>
              </li>
              <li>
                <Link href={"./blog"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuBlock}>
            <button className={styles.navButton}>Бренды</button>

            <ul className={styles.menuList}>
              <li>
                <Link href={"./blog"}>Наш Блог</Link>
              </li>
              <li>
                <Link href={"./blog"}>Контакты</Link>
              </li>
              <li>
                <Link href={"./blog"}>Доставка</Link>
              </li>
              <li>
                <Link href={"./blog"}>Оплата</Link>
              </li>
              <li>
                <Link href={"./blog"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <button>
            <Link href={"/calculateCost"}>Расчет стоимости</Link>
          </button>
          <div className={styles.menuBlock}>
            <button className={styles.navButton}>Информация</button>

            <ul className={styles.menuList}>
              <li>
                <Link href={"./blog"}>Наш Блог</Link>
              </li>
              <li>
                <Link href={"./blog"}>Контакты</Link>
              </li>
              <li>
                <Link href={"./blog"}>Доставка</Link>
              </li>
              <li>
                <Link href={"./blog"}>Оплата</Link>
              </li>
              <li>
                <Link href={"./blog"}>FAQ</Link>
              </li>
            </ul>
          </div>
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
