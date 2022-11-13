// const isEmail = (email) => {
//     const re =
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return re.test(String(email).toLowerCase())
// }

const isName = (name) => {
    const re = /^[A-ZЄ-ЯҐa-zа-їґ^']+$/i
    return re.test(name)
}

const isEmpty = (string = '') => {
    if (string.trim() === '') return true
    else return false
}

const isPhoneNumber = (phoneNumber) => {
    const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    return re.test(phoneNumber)
}

const isMinLength = (text, length) => {
    if (text.length >= length ) return true
    else return false
}

export const validateAnyQuestionForm = (data) => {
    const errors = []
    const objectKeys = Object.keys(data)

    objectKeys.forEach((key) => {
        if (isEmpty(data[key])) {
            errors.push(`Поле ${key} не може бути порожнім.`)
        }
    })

    if (!isName(data.name)) {
        errors.push('Некоректно введено ім\'я.')
    }

    if (!isPhoneNumber(data.number)) {
        errors.push('Некоректно введено номер телефону.')
    }

    if (!isMinLength(data.messageText, 10)) {
        errors.push('У полі "Повідомлення" не може бути менше десяти символів.')
    }

    return errors.length ? errors : true
}