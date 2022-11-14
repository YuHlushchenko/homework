import React from 'react'

import styles from './AccordionContainer.module.sass'
import PropTypes from 'prop-types'
import AccordionItem from '../AccordionItem/AccordionItem'

const accordionsInfo = {
    commercialProperty: {
        data: [
            {
                title: 'безкоштовний виїзд замірника',
                imgs: [
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img1.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img3.webp',
                        imgAlt: 'commercialProperty example',
                    },
                ],
                text: 'В залежності від запиту клієнта ремонт квартир в Києві під ключ може передбачати зміни в переліку послуг. У своїй роботі ми використовуємо лише сучасні та перевірені технології, безпечні оздоблювальні матеріали. Завдяки цьому ми можемо гарантувати високу якість та оперативність. Поетапність процесу здійснюється у суворій відповідності до прописаних технологій, термінів виробництва, а також регламентується нормами договору, підписаного замовником.',
            },
            {
                title: 'підбір матеріалів та розрахунок кошторису',
                imgs: [
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                ],
            },
            {
                title: 'економію до 20% на оптових закупівлях матеріалів',
            },
            {
                title: 'зафіксовану в офіційному договорі вартість',
                imgs: [],
                text: '',
            },
            {
                title: 'онлайн-контроль',
                imgs: [],
                text: 'jzjvlmd klji jaijd kdf mirj audfijlkdfk gaklg ieurgu09dufgioajelkr4t kjl jajduujaj jj aj ouasduf ua0su0g usudo',
            },
            {
                title: 'на час проведення робіт встановлюємо веб-камери на об\'єкті',
            },
            {
                title: '',
            },
            {
                title: 'контролювати процес можна зі смартфона з будь-якої точки світу',
            }
        ],
    },
    services: {
        data: [
            {
                title: 'безкоштовний виїзд замірника',
                imgs: [
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img1.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img3.webp',
                        imgAlt: 'commercialProperty example',
                    },
                ],
                text: 'В залежності від запиту клієнта ремонт квартир в Києві під ключ може передбачати зміни в переліку послуг. У своїй роботі ми використовуємо лише сучасні та перевірені технології, безпечні оздоблювальні матеріали. Завдяки цьому ми можемо гарантувати високу якість та оперативність. Поетапність процесу здійснюється у суворій відповідності до прописаних технологій, термінів виробництва, а також регламентується нормами договору, підписаного замовником.',
            },
            {
                title: 'підбір матеріалів та розрахунок кошторису',
                imgs: [
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                ],
            },
            {
                title: 'економію до 20% на оптових закупівлях матеріалів',
            },
            {
                title: 'зафіксовану в офіційному договорі вартість',
                imgs: [],
                text: '',
            },
            {
                title: 'онлайн-контроль',
                imgs: [],
                text: 'jzjvlmd klji jaijd kdf mirj audfijlkdfk gaklg ieurgu09dufgioajelkr4t kjl jajduujaj jj aj ouasduf ua0su0g usudo',
            },
            {
                title: 'на час проведення робіт встановлюємо веб-камери на об\'єкті',
            },
            {
                title: '',
            },
            {
                title: 'контролювати процес можна зі смартфона з будь-якої точки світу',
            }
        ],
    },
    smartHouse: {
        data: [
            {
                title: 'безкоштовний виїзд замірника',
                imgs: [
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img1.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img3.webp',
                        imgAlt: 'commercialProperty example',
                    },
                ],
                text: 'В залежності від запиту клієнта ремонт квартир в Києві під ключ може передбачати зміни в переліку послуг. У своїй роботі ми використовуємо лише сучасні та перевірені технології, безпечні оздоблювальні матеріали. Завдяки цьому ми можемо гарантувати високу якість та оперативність. Поетапність процесу здійснюється у суворій відповідності до прописаних технологій, термінів виробництва, а також регламентується нормами договору, підписаного замовником.',
            },
            {
                title: 'підбір матеріалів та розрахунок кошторису',
                imgs: [
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                    {
                        imgUrl: '/commercialPropertyImgs/accordion/img2.webp',
                        imgAlt: 'commercialProperty example',
                    },
                ],
            },
            {
                title: 'економію до 20% на оптових закупівлях матеріалів',
            },
            {
                title: 'зафіксовану в офіційному договорі вартість',
                imgs: [],
                text: '',
            },
            {
                title: 'онлайн-контроль',
                imgs: [],
                text: 'jzjvlmd klji jaijd kdf mirj audfijlkdfk gaklg ieurgu09dufgioajelkr4t kjl jajduujaj jj aj ouasduf ua0su0g usudo',
            },
            {
                title: 'на час проведення робіт встановлюємо веб-камери на об\'єкті',
            },
            {
                title: '',
            },
            {
                title: 'контролювати процес можна зі смартфона з будь-якої точки світу',
            }
        ],
        styleType: 'white',
    },
}

const AccordionContainer = ({ data }) => {
    return (
        <div className={accordionsInfo[data.option]?.styleType ? styles.white : styles.accordionContainer}>
            {
                data?.title && <h2>{data?.title}</h2>
            }
            {
                data?.description && <h3>{data?.description}</h3>
            }
            <div className={styles.accordion}>
                {
                    accordionsInfo[data.option].data.map((item) => {
                        return <AccordionItem
                            key={item.title}
                            info={item}
                            styleType={accordionsInfo[data.option]?.styleType}
                        />
                    })
                }

            </div>
        </div>
    )
}

AccordionContainer.propTypes = {
    data: PropTypes.object,
}

export default AccordionContainer