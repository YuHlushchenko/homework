import { useState, useEffect } from 'react'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'isNumber': {
                    const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
                    re.test(value) ? setNumberError(false) : setNumberError(true)
                    break
                }
            }
        }
    }, [value, validations])

    useEffect(() => {
        if (isEmpty || minLengthError || numberError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, numberError])

    return {
        isEmpty,
        minLengthError,
        numberError,
        inputValid,
    }
}

export { useValidation }