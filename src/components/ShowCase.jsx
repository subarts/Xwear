import React from "react"
import Image from "next/image"
import styles from "./../styles/ShowCase.module.css"

const ShowCase = () => {
  return (
    <section className=" mt-12  w-[96.3125rem] h-[39.4375rem] bg-orange-400 rounded-lg">
      <div className={styles.headline}>
        <h1 className={styles.caption}>
          ШИРОКИЙ
          <br /> АССОРТИМЕНТ
          <br /> ОДЕЖДЫ
        </h1>
        <p className={styles.headlineText}>
          Одежда от известные брендов у нас в каталоге.
          <br /> Только качественные вещи.
        </p>
        <button className={styles.button}>
          ПЕРЕЙТИ В КАТАЛОГ
          <Image src="./icons/vector.svg" width={8} height={14} alt="arrow" />
        </button>
      </div>
      <button className={`${styles.arrow}  ${styles.leftArrow}`}>
        <Image
          src="./icons/Vector (Stroke).svg"
          alt="leftArrow"
          height={14}
          width={8}
        />
      </button>
      <button className={`${styles.arrow} ${styles.rightArrow}`}>
        <Image
          className="rotate-180"
          src="./icons/Vector (Stroke).svg"
          alt="rightArrow"
          width={8}
          height={14}
        />
      </button>
    </section>
  )
}

export default ShowCase
