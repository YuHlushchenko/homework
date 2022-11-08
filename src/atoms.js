import { atom } from 'recoil'

// export const hoveredState = atom({
//     key: 'hoveredState',
//     default: false,
// })

export const notificationState = atom({
    key: 'notificationState',
    default: {
        message: '',
        isSuccess: false,
    }
})

export const showNotificationState = atom({
    key: 'showNotificationState',
    default: false
})