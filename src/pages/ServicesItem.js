import React from 'react'
import styles from '../styles/servicesItem.module.sass'
import { useParams } from 'react-router-dom'
import AdviceFormContainer from '../components/AdviceFormContainer/AdviceFormContainer'
import MoreDetailsContainer from '../components/MoreDetailsContainer/MoreDetailsContainer'
import Footer from '../components/Footer/Footer'

const ServicesItem = () => {
    const { name } = useParams()

    const options = {
        economy: {
            adviceForm: {
                title: 'економ варіант',
                description: '',
                imgUrl: '/servicesPageImgs/moreDetails/img1.png',
                subTitle: '',
                text1: 'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
                text2: "Вам залишається лише оформити заявку, поетапно внести оплату та в'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.",
                text3: '',
            },
            portfolio: {

            },
        },

        eurorepair: {
            adviceForm: {
                title: 'ремонт квартири євроремонт',
                imgUrl: '/servicesPageImgs/moreDetails/img2.png',
                text1: 'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
                text2: "Вам залишається лише оформити заявку, поетапно внести оплату та в'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.",
            },
            portfolio: {

            },
        },

        business: {
            adviceForm: {
                title: 'ремонт квартири бізнес',
                imgUrl: '/servicesPageImgs/moreDetails/img3.png',
                text1: 'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
                text2: "Вам залишається лише оформити заявку, поетапно внести оплату та в'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.",
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
                            <div key={index} className={styles.servicesItemContainer}>
                                <section className={styles.mainContentContainer}>
                                    <div className={styles.adviceFormContainer}>
                                        <AdviceFormContainer
                                            title={options[item].adviceForm.title}
                                            description={options[item].adviceForm.description}
                                            imgUrl={options[item].adviceForm.imgUrl}
                                            subTitle={options[item].adviceForm.subTitle}
                                            text1={options[item].adviceForm.text1}
                                            text2={options[item].adviceForm.text2}
                                            text3={options[item].adviceForm.text3}
                                        />
                                    </div>

                                    <div></div>
                                    <div></div>

                                    <div className={styles.moreDetailsContainer}>
                                        <MoreDetailsContainer
                                            option={'services'} // 'services' / 'apartmentDesign' / 'smartHause'
                                        />
                                    </div>
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

export default ServicesItem