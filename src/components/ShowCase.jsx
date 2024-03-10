import React from "react"
import Image from "next/image"
import styles from "./modulesCss/ShowCase.module.css"
const ShowCase = () => {
  return (
    <section className="wrapper w-[96.3125rem] h-[39.4375rem] bg-orange-400">
      <div>
        <h2>
          Широкий
          <br /> ассортимент
          <br /> Одежды
        </h2>
        <p>
          Одежда от известные брендов у нас в каталоге.
          <br /> Только качественные вещи.
        </p>
        <button className={styles.button}>Перейти в каталог</button>
      </div>
      <button className={styles.arrow}>
        <Image
          src="./icons/Vector (Stroke).svg"
          alt="leftArrow"
          width={14}
          height={8}
        />
      </button>
      <button className={styles.arrow}>
        <Image
          className="rotate-180"
          src="./icons/Vector (Stroke).svg"
          alt="rigthArrow"
          width={14}
          height={8}
        />
      </button>
    </section>
  )
}

export default ShowCase
