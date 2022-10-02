import React from 'react'
import styles from '../styles/responses.module.sass'
import Footer from '../components/Footer/Footer'

//SwiperJS
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
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
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={
              window.innerWidth <= 700
              ?
              {
                delay: 5000,
                disableOnInteraction: false,
            }
            : undefined
            }
            spaceBetween={50}
            slidesPerView={1}
            className='swiperCustomNavigationStyles'
          >

            {
              comments.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.slideContainer}>
                      <div className={styles.bgSheet1}></div>

                      <div className={styles.topQuotesContainer}>
                        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1_5)">
                            <path d="M78.9063 63.125C74.5365 63.125 70.2649 61.8292 66.6316 59.4015C62.9983 56.9739 60.1665 53.5233 58.4943 49.4862C56.8221 45.4491 56.3845 41.0068 57.237 36.721C58.0895 32.4352 60.1938 28.4985 63.2836 25.4086C66.3735 22.3188 70.3102 20.2145 74.596 19.362C78.8818 18.5095 83.3241 18.9471 87.3612 20.6193C91.3983 22.2915 94.8489 25.1233 97.2765 28.7566C99.7042 32.3899 101 36.6615 101 41.0313L101.101 44.1875C101.101 49.9903 99.9581 55.7363 97.7374 61.0973C95.5168 66.4584 92.262 71.3296 88.1588 75.4328C84.0556 79.536 79.1844 82.7908 73.8233 85.0114C68.4623 87.2321 62.7163 88.375 56.9135 88.375V75.75C61.0602 75.7612 65.1679 74.9502 68.9992 73.3639C72.8305 71.7776 76.3093 69.4476 79.2345 66.5085C80.3714 65.3737 81.4202 64.154 82.3718 62.8599C81.2254 63.04 80.0667 63.1308 78.9063 63.1313V63.125ZM22.0938 63.125C17.724 63.125 13.4524 61.8292 9.81913 59.4015C6.18583 56.9739 3.35402 53.5233 1.6818 49.4862C0.00957304 45.4491 -0.427957 41.0068 0.424535 36.721C1.27703 32.4352 3.38125 28.4985 6.47112 25.4086C9.56099 22.3188 13.4977 20.2145 17.7835 19.362C22.0693 18.5095 26.5116 18.9471 30.5487 20.6193C34.5858 22.2915 38.0364 25.1233 40.464 28.7566C42.8917 32.3899 44.1875 36.6615 44.1875 41.0313L44.2885 44.1875C44.2885 55.9068 39.6331 67.146 31.3463 75.4328C23.0595 83.7196 11.8203 88.375 0.10101 88.375V75.75C4.24768 75.7612 8.35542 74.9502 12.1867 73.3639C16.018 71.7776 19.4968 69.4476 22.422 66.5085C23.5589 65.3737 24.6077 64.154 25.5593 62.8599C24.4129 63.04 23.2542 63.1308 22.0938 63.1313V63.125Z" fill="#DB0000" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_5">
                              <rect width="101" height="101" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div className={styles.bgSheet2}>
                        <div className={styles.contentContainer}>
                          <div className={styles.profileInfo}>
                            <div className={styles.photoContainer}>
                              <img
                                src={`${item.imgSrc}`}
                                alt='user'
                                style={{ width: '150px', height: '150px' }}
                              />
                            </div>
                            <p>{item.userName}</p>
                            <p>{item.additionalInfo}</p>
                          </div>

                          <div className={styles.commentContainer}>
                            <p>{item.commentText}</p>
                          </div>
                        </div>
                      </div>

                      <div className={styles.bottomQuotesContainer}>
                        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1_7)">
                            <path d="M22.0937 37.875C26.4635 37.875 30.7351 39.1708 34.3684 41.5985C38.0017 44.0261 40.8335 47.4767 42.5057 51.5138C44.1779 55.5509 44.6155 59.9932 43.763 64.279C42.9105 68.5648 40.8062 72.5015 37.7164 75.5914C34.6265 78.6812 30.6898 80.7855 26.404 81.638C22.1182 82.4905 17.6759 82.0529 13.6388 80.3807C9.60172 78.7085 6.15115 75.8767 3.72346 72.2434C1.29576 68.6101 -1.52588e-05 64.3385 -1.52588e-05 59.9687L-0.101013 56.8125C-0.101013 51.0097 1.04193 45.2637 3.26256 39.9027C5.48318 34.5416 8.73801 29.6704 12.8412 25.5672C16.9444 21.464 21.8156 18.2092 27.1767 15.9886C32.5377 13.7679 38.2837 12.625 44.0865 12.625V25.25C39.9398 25.2388 35.8321 26.0498 32.0008 27.6361C28.1695 29.2224 24.6907 31.5524 21.7655 34.4915C20.6286 35.6263 19.5798 36.846 18.6282 38.1401C19.7746 37.96 20.9333 37.8692 22.0937 37.8687V37.875ZM78.9062 37.875C83.276 37.875 87.5476 39.1708 91.1809 41.5985C94.8142 44.0261 97.646 47.4767 99.3182 51.5138C100.99 55.5509 101.428 59.9932 100.575 64.279C99.723 68.5648 97.6187 72.5015 94.5289 75.5914C91.439 78.6812 87.5023 80.7855 83.2165 81.638C78.9307 82.4905 74.4884 82.0529 70.4513 80.3807C66.4142 78.7085 62.9636 75.8767 60.536 72.2434C58.1083 68.6101 56.8125 64.3385 56.8125 59.9687L56.7115 56.8125C56.7115 45.0932 61.3669 33.854 69.6537 25.5672C77.9405 17.2804 89.1797 12.625 100.899 12.625V25.25C96.7523 25.2388 92.6446 26.0498 88.8133 27.6361C84.982 29.2224 81.5032 31.5524 78.578 34.4915C77.4411 35.6263 76.3923 36.846 75.4407 38.1401C76.5871 37.96 77.7458 37.8692 78.9062 37.8687V37.875Z" fill="#DB0000" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_7">
                              <rect width="101" height="101" fill="white" transform="translate(101 101) rotate(-180)" />
                            </clipPath>
                          </defs>
                        </svg>
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