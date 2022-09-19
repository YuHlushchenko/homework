import React from 'react'
import Button from '../UI/Button/Button'
import styles from './MainSlider.module.sass'
import './swiperCustomStyles.sass'

//SwiperJS
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const MainSlider = () => {
    return (
        <div className={styles.mainSliderContainer} >

            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 100000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                className='swiperCustomStyles'
            >
                <SwiperSlide>
                    <div className={`${styles.bgImage} ${styles.image1}`}>
                        <div className={styles.bgCover}>

                            <div className={styles.contentContainer}>
                                <h1>Ремонт квартир <br /> під ключ</h1>
                                <p>Зробимо ремонт вашої мрії та втілимо <br /> всі ваші бажання по дизайн-проєкту</p>

                                <div className={styles.bttnsContainer}>
                                    <Button
                                        value={'Розрахувати вартість'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                { marginRight: '60px' }
                                                :
                                                {
                                                    marginBottom: '30px',
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                    <Button
                                        value={'Замовити дзвінок'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                undefined
                                                :
                                                {
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.bgImage} ${styles.image2}`}>
                        <div className={styles.bgCover}>

                            <div className={styles.contentContainer}>
                                <h1>Економ <br /> варіант</h1>
                                <p>Зробимо ремонт вашої мрії та втілимо <br /> всі ваші бажання по дизайн-проєкту</p>
                                <div className={styles.bttnsContainer}>
                                    <Button
                                        value={'Розрахувати вартість'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                { marginRight: '60px' }
                                                :
                                                {
                                                    marginBottom: '30px',
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                    <Button
                                        value={'Замовити дзвінок'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                undefined
                                                :
                                                {
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.bgImage} ${styles.image3}`}>
                        <div className={styles.bgCover}>

                            <div className={styles.contentContainer}>
                                <h1>Ремонт квартири <br /> євроремонт </h1>
                                <p>Зробимо ремонт вашої мрії та втілимо <br /> всі ваші бажання по дизайн-проєкту</p>
                                <div className={styles.bttnsContainer}>
                                    <Button
                                        value={'Розрахувати вартість'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                { marginRight: '60px' }
                                                :
                                                {
                                                    marginBottom: '30px',
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                    <Button
                                        value={'Замовити дзвінок'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                undefined
                                                :
                                                {
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.bgImage} ${styles.image4}`}>
                        <div className={styles.bgCover}>

                            <div className={styles.contentContainer}>
                                <h1>Ремонт квартири <br /> бізнес</h1>
                                <p>Зробимо ремонт вашої мрії та втілимо <br /> всі ваші бажання по дизайн-проєкту</p>
                                <div className={styles.bttnsContainer}>
                                    <Button
                                        value={'Розрахувати вартість'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                { marginRight: '60px' }
                                                :
                                                {
                                                    marginBottom: '30px',
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                    <Button
                                        value={'Замовити дзвінок'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                undefined
                                                :
                                                {
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.bgImage} ${styles.image5}`}>
                        <div className={styles.bgCover}>

                            <div className={styles.contentContainer}>
                                <h1>Дизайнерський ремонт <br /> під ключ</h1>
                                <p>Зробимо ремонт вашої мрії та втілимо <br /> всі ваші бажання по дизайн-проєкту</p>
                                <div className={styles.bttnsContainer}>
                                    <Button
                                        value={'Розрахувати вартість'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                { marginRight: '60px' }
                                                :
                                                {
                                                    marginBottom: '30px',
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                    <Button
                                        value={'Замовити дзвінок'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                undefined
                                                :
                                                {
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.bgImage} ${styles.image6}`}>
                        <div className={styles.bgCover}>

                            <div className={styles.contentContainer}>
                                <h1>Ремонт <br /> офісів</h1>
                                <p>Зробимо ремонт вашої мрії та втілимо <br /> всі ваші бажання по дизайн-проєкту</p>

                                <div className={styles.bttnsContainer}>
                                    <Button
                                        value={'Розрахувати вартість'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                { marginRight: '60px' }
                                                :
                                                {
                                                    marginBottom: '30px',
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                    <Button
                                        value={'Замовити дзвінок'}
                                        btnStyle={'white'}
                                        inlineStyle={
                                            window.innerWidth > 730
                                                ?
                                                undefined
                                                :
                                                {
                                                    width: '280px',
                                                    fontSize: '17px'
                                                }
                                        }
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}

export default MainSlider