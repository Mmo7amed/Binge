import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'


function Layout() {
    return (
        <>
        <div className={styles.layoutBackg}>
            <Navbar />
            <main className={styles.layoutMain}>
                <Outlet />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default Layout
