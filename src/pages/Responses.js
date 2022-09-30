import React from 'react'
import styles from '../styles/responses.module.sass'
import Footer from '../components/Footer/Footer'

//SwiperJS
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/swiperCustomNavigationStyles.sass'

const Responses = () => {

  const comments = [
    {
      imgSrc: '/commentsPhoto/photo1.png',
      userName: 'Семків Руслана',
      additionalInfo: 'Ремонт квартири',
      commentText: 'Хочу сказати велике спасибі за ремонт двокімнатної квартири в ЖК Французький Квартал. Ми з чоловіком думали з чого почати ремонт квартири. Довго в інтернеті шукали відгуки ремонт квартир в новобудові. За відгуками ми знайшли компанію "Свої стіни". Ремонт нам зробили за 3 місяці. Дизайнер допоміг нам підібрати плитку, сантехніку, ламінат і все необхідне для ремонту. Постійно обговорював з нами кожну деталь ремонту. В цілому ми дуже задоволені результатом, рекомендуємо.',
    },
    {
      imgSrc: '/commentsPhoto/photo2.png',
      userName: 'Лилик Оля',
      additionalInfo: 'Ремонт квартири під ключ',
      commentText: 'Хочу сказати велике спасибі за ремонт двокімнатної квартири в ЖК Французький Квартал. Ми з чоловіком думали з чого почати ремонт квартири. Довго в інтернеті шукали відгуки ремонт квартир в новобудові. За відгуками ми знайшли компанію "Свої стіни". Ремонт нам зробили за 3 місяці. Дизайнер допоміг нам підібрати плитку, сантехніку, ламінат і все необхідне для ремонту. Постійно обговорював з нами кожну деталь ремонту. В цілому ми дуже задоволені результатом, рекомендуємо.',
    },
    {
      imgSrc: '/commentsPhoto/photo3.png',
      userName: 'Ремітов Степан',
      additionalInfo: 'Євроремонт',
      commentText: 'Ми думали з чого почати ремонт квартири. Довго в інтернеті шукали відгуки ремонт квартир в новобудові. За відгуками ми знайшли компанію "Свої стіни". Ремонт нам зробили за 3 місяці. Дизайнер допоміг нам підібрати плитку, сантехніку, ламінат і все необхідне для ремонту. Постійно обговорював з нами кожну деталь ремонту. В цілому ми дуже задоволені результатом, рекомендуємо.',
    },
  ]

  return (
    <>
      <section className={styles.responsesContainer}>
        <div className={styles.titleContainer}>
          <h2>відгуки</h2>
          <p>Будемо вдячні, якщо Ви напишите пару рядків про якість нашої роботи. Всі відгуки та побажання надсилайте, будь ласка, на наш email hely.com.ua</p>
        </div>

        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            className='swiperCustomNavigationStyles'
          >

            {
              comments.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.slideContainer}>
                      <div className={styles.bgConainer}>
                        <svg width="1316" height="563" viewBox="0 0 1316 563" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_1_9)">
                            <rect x="40.9233" y="30" width="1262" height="438" transform="rotate(3 40.9233 30)" fill="#F8F4F3" />
                          </g>
                          <g filter="url(#filter1_d_1_9)">
                            <rect x="28.5977" y="62.7236" width="1262" height="438" fill="#F8F4F3" />
                          </g>
                          <g clipPath="url(#clip0_1_9)">
                            <path d="M1293.91 63.125C1289.54 63.125 1285.26 61.8292 1281.63 59.4015C1278 56.9739 1275.17 53.5233 1273.49 49.4862C1271.82 45.4491 1271.38 41.0068 1272.24 36.721C1273.09 32.4352 1275.19 28.4985 1278.28 25.4086C1281.37 22.3188 1285.31 20.2145 1289.6 19.362C1293.88 18.5095 1298.32 18.9471 1302.36 20.6193C1306.4 22.2915 1309.85 25.1233 1312.28 28.7566C1314.7 32.3899 1316 36.6615 1316 41.0313L1316.1 44.1875C1316.1 49.9903 1314.96 55.7363 1312.74 61.0973C1310.52 66.4584 1307.26 71.3296 1303.16 75.4328C1299.06 79.536 1294.18 82.7908 1288.82 85.0114C1283.46 87.2321 1277.72 88.375 1271.91 88.375V75.75C1276.06 75.7612 1280.17 74.9502 1284 73.3639C1287.83 71.7776 1291.31 69.4476 1294.23 66.5085C1295.37 65.3737 1296.42 64.154 1297.37 62.8599C1296.23 63.04 1295.07 63.1308 1293.91 63.1313V63.125ZM1237.09 63.125C1232.72 63.125 1228.45 61.8292 1224.82 59.4015C1221.19 56.9739 1218.35 53.5233 1216.68 49.4862C1215.01 45.4491 1214.57 41.0068 1215.42 36.721C1216.28 32.4352 1218.38 28.4985 1221.47 25.4086C1224.56 22.3188 1228.5 20.2145 1232.78 19.362C1237.07 18.5095 1241.51 18.9471 1245.55 20.6193C1249.59 22.2915 1253.04 25.1233 1255.46 28.7566C1257.89 32.3899 1259.19 36.6615 1259.19 41.0313L1259.29 44.1875C1259.29 55.9068 1254.63 67.146 1246.35 75.4328C1238.06 83.7196 1226.82 88.375 1215.1 88.375V75.75C1219.25 75.7612 1223.36 74.9502 1227.19 73.3639C1231.02 71.7776 1234.5 69.4476 1237.42 66.5085C1238.56 65.3737 1239.61 64.154 1240.56 62.8599C1239.41 63.04 1238.25 63.1308 1237.09 63.1313V63.125Z" fill="#DB0000" />
                          </g>
                          <g clipPath="url(#clip1_1_9)">
                            <path d="M22.0937 499.875C26.4635 499.875 30.7351 501.171 34.3684 503.598C38.0017 506.026 40.8335 509.477 42.5057 513.514C44.1779 517.551 44.6155 521.993 43.763 526.279C42.9105 530.565 40.8062 534.502 37.7164 537.591C34.6265 540.681 30.6898 542.785 26.404 543.638C22.1182 544.49 17.6759 544.053 13.6388 542.381C9.60172 540.708 6.15115 537.877 3.72345 534.243C1.29576 530.61 -1.20401e-05 526.338 -1.20401e-05 521.969L-0.101017 518.812C-0.101017 513.01 1.04193 507.264 3.26256 501.903C5.48319 496.542 8.73802 491.67 12.8412 487.567C16.9444 483.464 21.8156 480.209 27.1767 477.989C32.5377 475.768 38.2837 474.625 44.0865 474.625V487.25C39.9398 487.239 35.8321 488.05 32.0008 489.636C28.1695 491.222 24.6907 493.552 21.7655 496.491C20.6286 497.626 19.5798 498.846 18.6282 500.14C19.7746 499.96 20.9333 499.869 22.0937 499.869V499.875ZM78.9062 499.875C83.276 499.875 87.5476 501.171 91.1809 503.598C94.8142 506.026 97.646 509.477 99.3182 513.514C100.99 517.551 101.428 521.993 100.575 526.279C99.723 530.565 97.6187 534.502 94.5289 537.591C91.439 540.681 87.5023 542.785 83.2165 543.638C78.9307 544.49 74.4884 544.053 70.4513 542.381C66.4142 540.708 62.9637 537.877 60.536 534.243C58.1083 530.61 56.8125 526.338 56.8125 521.969L56.7115 518.812C56.7115 507.093 61.3669 495.854 69.6537 487.567C77.9405 479.28 89.1797 474.625 100.899 474.625V487.25C96.7523 487.239 92.6446 488.05 88.8133 489.636C84.982 491.222 81.5032 493.552 78.578 496.491C77.4411 497.626 76.3923 498.846 75.4407 500.14C76.5871 499.96 77.7458 499.869 78.9062 499.869V499.875Z" fill="#DB0000" />
                          </g>
                          <defs>
                            <filter id="filter0_d_1_9" x="6.00018" y="22" width="1307.19" height="527.448" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="6" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_9" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_9" result="shape" />
                            </filter>
                            <filter id="filter1_d_1_9" x="16.5977" y="54.7236" width="1286" height="462" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="6" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_9" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_9" result="shape" />
                            </filter>
                            <clipPath id="clip0_1_9">
                              <rect width="101" height="101" fill="white" transform="translate(1215)" />
                            </clipPath>
                            <clipPath id="clip1_1_9">
                              <rect width="101" height="101" fill="white" transform="translate(101 563) rotate(-180)" />
                            </clipPath>
                          </defs>
                        </svg>

                        <div className={styles.contentContainer}>
                          <div className={styles.profileInfo}>
                            <div className={styles.photoContainer}>
                              <img src={`${item.imgSrc}`} alt='user'/>
                            </div>
                            <p>{item.userName}</p>
                            <p>{item.additionalInfo}</p>
                          </div>

                          <div className={styles.commentContainer}>
                            <p>{item.commentText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Responses