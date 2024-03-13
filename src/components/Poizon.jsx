import React from "react"
import Image from "next/image"
import styles from "./../styles/poizon.module.css"
const Poizon = () => {
  return (
    <section
      className={`flex flex-col flex-wrap mt-20  w-[96.3125rem] h-[39.4375rem] rounded-lg ${styles.section}`}
    >
      <div className={styles.title}>
        <h2 className={styles.h2}>
          РАССЧИТАТЬ
          <br /> СТОИМОСТЬ
        </h2>
        <p>
          Если вам не удалось найти то, что искали, вы всегда можете
          воспользоваться автоматическим расчетом стоимость заказа на
          маркетплейсе Poizon, включая комиссию сервиса и доставку.
        </p>
      </div>
      <div className={styles.preceptList}>
        <div className={styles.preceptItem}>
          <span className={styles.circle}>1</span>
          <p className={styles.text}>
            Подробная, пошаговая статья о том, как установить приложение Poizon
          </p>
        </div>
        <div className={styles.preceptItem}>
          <span className={styles.circle}>2</span>
          <p className={styles.text}>
            Напишите нам в Telegram или WhatsApp какую вещь хотите купить
          </p>
        </div>
      </div>
      <button className={styles.button}>
        РАССЧИТАТЬ СТОИМОСТЬ
        <Image src="./icons/vector.svg" width={8} height={14} alt="arrow" />
      </button>
      <Image
        className={styles.image}
        src="./images/Group 329.svg"
        width={636}
        height={636}
        alt="phone"
      />
    </section>
  )
}

export default Poizon
