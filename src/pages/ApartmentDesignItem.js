import React from 'react'
import styles from '../styles/apartmentDesignItem.module.sass'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import MoreDetailsContainer from '../components/MoreDetailsContainer/MoreDetailsContainer'
import AdviceFormContainer from '../components/AdviceFormContainer/AdviceFormContainer'


const ApartmentDesignItem = () => {
    const { name } = useParams()

    const options = {
        project: {
            adviceForm: {
                title: 'ДИЗАЙН ПРОЄКТ',
                imgUrl: '/apartmentDesignImgs/img1.png',
            },
            portfolio: {

            },
        },

        visualisation: {
            adviceForm: {
                title: '3d візуалізація',
                imgUrl: '/apartmentDesignImgs/img2.png',
            },
            portfolio: {

            },
        },

        placement: {
            adviceForm: {
                title: 'План розміщення меблів',
                imgUrl: '/apartmentDesignImgs/img3.png',
            },
            portfolio: {

            },
        },
    }

    const optionsKeys = Object.keys(options)

    return (
        <>
            {
                optionsKeys.map((item, index) => {
                    return (
                        name === item
                            ?
                            <div key={index} className={styles.apartmentDesignItemContainer}>
                                <section className={styles.adviceFormContainer}>
                                    <AdviceFormContainer
                                        title={options[item].adviceForm.title}
                                        description={options[item].adviceForm.description}
                                        imgUrl={options[item].adviceForm.imgUrl}
                                        subTitle={options[item].adviceForm.subTitle}
                                        text1={options[item].adviceForm.text1}
                                        text2={options[item].adviceForm.text2}
                                        text3={options[item].adviceForm.text3}
                                    />
                                </section>

                                <section></section>
                                <section></section>

                                <section className={styles.moreDetailsContainer}>
                                    <MoreDetailsContainer
                                        option={'apartmentDesign'}  // 'services' / 'apartmentDesign' / 'smartHause'
                                    />
                                </section>

                                <section className={styles.footerContainer}>
                                    <Footer />
                                </section>
                            </div>
                            : undefined
                    )
                })
            }
        </>
    )
}

export default ApartmentDesignItem