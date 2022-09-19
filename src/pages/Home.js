import React from 'react'
import MainSlider from '../components/MainSlider/MainSlider'
import styles from '../styles/home.module.sass'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <section className={styles.mainSliderSection}>
            <MainSlider />
        </section>
    </div>
  )
}

export default Home