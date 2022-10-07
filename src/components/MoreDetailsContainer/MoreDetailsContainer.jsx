import React from 'react'
import MoreDetailsItem from '../MoreDetailsItem/MoreDetailsItem'
import styles from './MoreDetailsContainer.module.sass'

const MoreDetailsContainer = ({ option }) => {

    const options = {
        services: [
            {
                imgUrl: '/ServicesPageImgs/moreDetails/img1.png',
                description: 'Ремонт квартири під ключ',
                title: 'Економ варіант',
                price: '300 грн',
                bttnLink: '/services/economy',
                namePage: 'economy',
            },
            {
                imgUrl: '/ServicesPageImgs/moreDetails/img2.png',
                description: 'Ремонт квартири під ключ',
                title: 'євроремонт',
                price: '550 грн',
                bttnLink: '/services/eurorepair',
                namePage: 'eurorepair',
            },
            {
                imgUrl: '/ServicesPageImgs/moreDetails/img3.png',
                description: 'Ремонт квартири під ключ',
                title: 'бізнес',
                price: '880 грн',
                bttnLink: '/services/business',
                namePage: 'business',
            },
        ],

        apartmentDesign: [
            {
                imgUrl: '',
                description: 'ДИЗАЙН ПРОЄКТ',
                title: '',
                price: '10 USD ЗА М',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: '3D ВІЗУАЛІЗАЦІЯ',
                title: '',
                price: '20 USD ЗА М',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: 'РОЗМІЩЕННЯ МЕБЛІВ',
                title: '',
                price: '20 USD ЗА М',
                bttnLink: '',
            },
        ],

        smartHouse: [
            {
                imgUrl: '',
                description: '',
                title: 'Управління кліматом',
                price: '',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: '',
                title: 'управління освітленням',
                price: '',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: '',
                title: 'система безпеки',
                price: '',
                bttnLink: '',
            },
        ]
    }

    return (
        <div className={styles.container}>
            {
                option === 'services'
                    ?
                    options.services.map((item, index) => {
                        return (
                            <MoreDetailsItem
                                key={index}
                                imgUrl={item.imgUrl}
                                description={item.description}
                                title={item.title}
                                price={item.price}
                                bttnLink={item.bttnLink}
                                namePage={item.namePage}
                            />
                        )
                    })
                    :
                    option === 'apartmentDesign'
                        ?
                        options.apartmentDesign.map((item, index) => {
                            return (
                                <MoreDetailsItem
                                    key={index}
                                    imgUrl={item.imgUrl}
                                    description={item.description}
                                    title={item.title}
                                    price={item.price}
                                    bttnLinc={item.bttnLink}
                                    namePage={item.namePage}
                                />
                            )
                        })
                        :
                        options.smartHouse.map((item, index) => {
                            return (
                                <MoreDetailsItem
                                    key={index}
                                    imgUrl={item.imgUrl}
                                    description={item.description}
                                    title={item.title}
                                    price={item.price}
                                    bttnLinc={item.bttnLink}
                                    namePage={item.namePage}
                                />
                            )
                        })
            }
        </div>
    )
}

export default MoreDetailsContainer