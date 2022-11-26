import Button from '../UI/Button/Button'
import styles from './MainSlider.module.sass'
import './swiperCustomStyles.sass'

//SwiperJS
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const mainSliderData = [
    {
        imgUrl: '/sliderBackgrounds/slider1.webp',
        title1: 'Ремонт квартир',
        title2: 'під ключ',
        description1: 'Зробимо ремонт вашої мрії та втілимо',
        description2: 'всі ваші бажання по дизайн-проєкту',
    },
    {
        imgUrl: '/sliderBackgrounds/slider2.webp',
        title1: 'Економ',
        title2: 'варіант',
        description1: 'Зробимо ремонт вашої мрії та втілимо',
        description2: 'всі ваші бажання по дизайн-проєкту',
    },
    {
        imgUrl: '/sliderBackgrounds/slider3.webp',
        title1: 'Ремонт квартири',
        title2: 'євроремонт',
        description1: 'Зробимо ремонт вашої мрії та втілимо',
        description2: 'всі ваші бажання по дизайн-проєкту',
    },
    {
        imgUrl: '/sliderBackgrounds/slider4.webp',
        title1: 'Ремонт квартири',
        title2: 'бізнес',
        description1: 'Зробимо ремонт вашої мрії та втілимо',
        description2: 'всі ваші бажання по дизайн-проєкту',
    },
    {
        imgUrl: '/sliderBackgrounds/slider5.webp',
        title1: 'Дизайнерський ремонт',
        title2: 'під ключ',
        description1: 'Зробимо ремонт вашої мрії та втілимо',
        description2: 'всі ваші бажання по дизайн-проєкту',
    },
    {
        imgUrl: '/sliderBackgrounds/slider6.webp',
        title1: 'Ремонт',
        title2: 'офісів',
        description1: 'Зробимо ремонт вашої мрії та втілимо',
        description2: 'всі ваші бажання по дизайн-проєкту',
    }
]

const MainSlider = () => {
    return (
        <div className={styles.mainSliderContainer} >

            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
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
                {
                    mainSliderData && mainSliderData.map((item) => {
                        return <SwiperSlide key={item?.title1 + '' + item.title2}>
                            <div className={`${styles.bgImage} ${styles.img}`}
                                style={{ backgroundImage: `url(${item?.imgUrl})` }}
                            >
                                <div className={styles.bgCover}>

                                    <div className={styles.contentContainer}>
                                        <h1>{item?.title1} <br /> {item.title2}</h1>
                                        <p>{item?.description1} <br /> {item.description2}</p>

                                        <div className={styles.bttnsContainer}>
                                            <a href='/calculator'>
                                                <div className={styles.leftBtnContainer}>
                                                    <Button
                                                        value={'Розрахувати вартість'}
                                                        btnStyle={'white'}
                                                    />
                                                </div>
                                            </a>
                                            <a href='/contacts'>
                                                <div className={styles.rightBtnContainer}>
                                                    <Button
                                                        value={'Замовити дзвінок'}
                                                        btnStyle={'white'}
                                                    />
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div >
    )
}

export default MainSlider