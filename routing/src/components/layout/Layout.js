import React from 'react'
import styles from './Layout.module.css'
import MainNavigation from './MainNavigation'

export default function Layout(props) {
  return (
    <React.Fragment>
        <MainNavigation />
        <main className={styles.main}>{props.children}</main>
    </React.Fragment>
  )
}
