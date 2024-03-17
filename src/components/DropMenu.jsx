import React from "react"
import styles from "./../styles/DropMenu.module.css"
const DropMenu = () => {
  return (
    <ul className={styles.menuList}>
      <li>Блог</li>
      <li>Контакты</li>
      <li>Доставка</li>
      <li>Оплата</li>
      <li>FAQ</li>
    </ul>
  )
}

export default DropMenu
