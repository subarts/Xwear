import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./../styles/LinkMoreProducts.module.css"
const LinkMoreProducts = (linkShoes) => {
  return (
    <Link
      className={styles.moreProducts}
      href={Object.values(linkShoes).toString()}
    >
      <button className={styles.titleLink}>БОЛЬШЕ ТОВАРОВ</button>
      <Image
        className="rotate-180"
        src="./icons/Vector (Stroke).svg"
        height={12}
        width={6}
        alt="arrow"
      />
    </Link>
  )
}

export default LinkMoreProducts
