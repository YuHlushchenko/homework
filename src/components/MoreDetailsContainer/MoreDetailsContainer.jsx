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
                bttnLink: '/',
            },
            {
                imgUrl: '/ServicesPageImgs/moreDetails/img2.png',
                description: 'Ремонт квартири під ключ',
                title: 'євроремонт',
                price: '550 грн',
                bttnLink: '/',
            },
            {
                imgUrl: '/ServicesPageImgs/moreDetails/img3.png',
                description: 'Ремонт квартири під ключ',
                title: 'бізнес',
                price: '880 грн',
                bttnLink: '/',
            },
        ],

        apartmentDesign: [
            {
                imgUrl: '',
                description: '',
                title: '',
                price: '',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: '',
                title: '',
                price: '',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: '',
                title: '',
                price: '',
                bttnLink: '',
            },
        ],

        smartHouse: [
            {
                imgUrl: '',
                description: '',
                title: '',
                price: '',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: '',
                title: '',
                price: '',
                bttnLink: '',
            },
            {
                imgUrl: '',
                description: '',
                title: '',
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
                                    bttnLinc={item.bttnLinc}
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
                                    bttnLinc={item.bttnLinc}
                                />
                            )
                        })
            }
        </div>
    )
}

export default MoreDetailsContainer