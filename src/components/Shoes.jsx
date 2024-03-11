import React from "react"
import Image from "next/image"
const Shoes = () => {
  return (
    <section>
      <h2>Обувь</h2>
      <h3>
        больше товаров
        <Image src="./icons/vector.svg" width={8} height={14} alt="arrow" />
      </h3>
    </section>
  )
}

export default Shoes
