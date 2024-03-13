import React from "react"
import LinkMoreProducts from "./LinkMoreProducts"
const ShoesShowcase = () => {
  return (
    <section className="w-[85.125rem] h-[32.5625rem] bg-orange-400 mt-20 flex flex-row flex-wrap justify-between">
      <h2>ОБУВЬ</h2>
      <LinkMoreProducts linkShoesCatalog={"/shoes"} />
      <div className="w-[96.3125rem] h-[23.0625rem] bg-slate-700"></div>
    </section>
  )
}

export default ShoesShowcase
