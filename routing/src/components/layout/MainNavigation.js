import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./MainNavigation.module.css"

export default function MainNavigation() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>Great Quotes</div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes'>All Quotes</NavLink>
                </li>
                <li>
                    <NavLink to='/new-quote'>Add a Quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
