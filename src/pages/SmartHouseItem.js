import React from 'react'
import { useParams } from 'react-router-dom'
import AdviceFormContainer from '../components/AdviceFormContainer/AdviceFormContainer'
import Footer from '../components/Footer/Footer'
import MoreDetailsContainer from '../components/MoreDetailsContainer/MoreDetailsContainer'
import styles from '../styles/smartHouseItem.module.sass'

const SmartHouseItem = () => {
  const { name } = useParams()

  const options = {
    climate: {
      adviceForm: {
        title: 'Управління кліматом',
        imgUrl: '/smartHousePageImgs/img1.png',
        subTitle: 'Важливості клімату ',
        text1: "Домашній мікроклімат робить істотний вплив на організм людини. Відхилення параметрів мікроклімату від норми викликає дискомфорт, погане самопочуття, проблеми зі здоров'ям. Для повноцінного комфорту людському тілу необхідний тепловий баланс, рівень вологості повітря і, звичайно ж, належна його якість.",
      },
    },

    lighting: {
      adviceForm: {
        title: 'Управління освітленням',
        imgUrl: '/smartHousePageImgs/img2.png',
        subTitle: 'Освітлення',
        text1: "Саме освітлення, як ніщо інше, впливає на домашній затишок. Правильно підібране світло здатне навіть впливати на настрій. Воно може як позитивно, так і негативно відбитися на працездатності. Регулюючи освітлення можна створити інтимну або робочу обстановку, заспокоїти думки і підготувати себе до сну або, навпаки, викликати мозкову активність і прокинутися.",
        text2: "Крім функціональності, світло також виконує і декоративну функцію. Правильно вибираючи яскравість і колір освітлення, можна візуально змінити інтер'єр і створити потрібну атмосферу.",
        text3: "Саме тому правильному освітленню необхідно приділити належну увагу.",
      },
    },

    security: {
      adviceForm: {
        title: 'Системи безпеки',
        imgUrl: '/smartHousePageImgs/img3.png',
        subTitle: 'Важливості безпеки',
        text1: "Безпека - важливий фактор якості нашого життя. Ми можемо про неї не замислюватися, але мимоволі згадуємо при вигляді статистики крадіжок і застосування насильства. Забезпечення безпеки превентивна і необхідний захід, саме від неї залежить, чи зможемо ми вберегти від небезпеки себе і свою сім'ю.",
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

                  <div className={styles.moreDetailsContainer}>
                    <MoreDetailsContainer
                      option={'smartHause'} // 'services' / 'apartmentDesign' / 'smartHause'
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

export default SmartHouseItem