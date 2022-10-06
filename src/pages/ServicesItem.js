import React from 'react'
import { useParams } from 'react-router-dom'

const ServicesItem = () => {
    const { name } = useParams()

    const options = {
        'economy': [
            {

            }
        ],

        'eurorepair': [
            {

            }
        ],

        'business': [
            {

            }
        ],
    }

    const optionsKeys = Object.keys(options)

    return (
        <>
            {
                optionsKeys.forEach((item, index) => {
                    if (name === item) {
                        return (
                            <div key={index}>
                                {
                                    // console.log(item)
                                }
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default ServicesItem