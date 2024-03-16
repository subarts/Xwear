import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./../styles/Footer.module.css"
const Footer = () => {
  return (
    <footer className="h-[23.1875rem] bg-black mt-[15rem] flex items-center">
      <div className="wrapper w-[84.625rem] flex justify-between gap-[13.25rem]">
        <div className="h-[17.1875rem] flex flex-col justify-between">
          <div className={styles.listItems}>
            <h3>КАТАЛОГ</h3>
            <ul>
              <li>
                <Link href={"/clothes"}>Одежда</Link>
              </li>
              <li>
                <Link href={"/shoes"}>Обувь</Link>
              </li>
              <li>
                <Link href={"/accessories"}>Аксессуары</Link>
              </li>
              <li>
                <Link href={"/calculateCost"}>Расчет стоимости</Link>
              </li>
            </ul>
          </div>
          <Image src="./icons/Group 40.svg" width={99} height={40} alt="logo" />
        </div>
        <div className={styles.listItems}>
          <h3>ИНФОРМАЦИЯ</h3>
          <ul>
            <li>
              <Link href={"/blog"}>Блог</Link>
            </li>
            <li>
              <Link href={"/contacts"}>Контакты</Link>
            </li>
            <li>
              <Link href={"/delivery"}>Доставка</Link>
            </li>
            <li>
              <Link href={"/payment"}>Оплата</Link>
            </li>
            <li>
              <Link href={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className={`w-[8.9375rem] ${styles.listItems}`}>
          <h3>КОНТАКТЫ</h3>
          <ul>
            <li>
              <Link href="mailto:info@xwear.info">info@xwear.info</Link>
            </li>
            <li>
              <Link href="tel: +79991234567">+7 999 123 45 67</Link>
            </li>
            <li className="flex flex-row flex-wrap gap-x-[0.56rem] gap-y-[3px]">
              МЕССЕНДЖЕРЫ
              <div className="flex flex-row gap-x-2">
                <Link href="https://telegram.org/">
                  <Image
                    src="./icons/Group 345.svg"
                    width={30}
                    height={30}
                    alt="telgramm"
                  />
                </Link>
                <Link href="https://www.reddit.com/r/nosurf/comments/ugoypn/i_fucking_hate_whatsapp/?rdt=42005">
                  <Image
                    src="./icons/Group 344.svg"
                    width={30}
                    height={30}
                    alt="whatsApp"
                  />
                </Link>
              </div>
            </li>
            <li className="flex flex-col gap-y-[3px]">
              НАШИ СОЦ.СЕТИ
              <Link href="https://vk.com/">
                <Image
                  src="./icons/Frame 13.svg"
                  width={30}
                  height={30}
                  alt="vk"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between flex-col w-[17.125rem]">
          <div className={styles.listItems}>
            <h3>ПОДПИСКА НА НОВОСТИ</h3>
            <p>Будьте в курсе скидок и новостей</p>
            <input
              type="email"
              placeholder="Ваш email"
              className="border-b bg-black text-white outline-0"
            ></input>
            <Link href={"/zyo"}>
              Подписываясь на рассылку вы соглашатесь с обработкой персональных
              данных
            </Link>
          </div>
          <Link href={"/"} className="underline">
            Политика конфиденциальности
            <br /> Пользовательское соглашение
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
