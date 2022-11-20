import { useState, useRef, useEffect } from 'react'
import styles from './AccordionItem.module.sass'
import PropTypes from 'prop-types'
import autoAnimate from '@formkit/auto-animate'

const AccordionItem = ({ info, styleType }) => {
  const [dropDown, setDropDown] = useState(false)
  const parent = useRef(null)

  const dropDownHandler = () => setDropDown(!dropDown)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    info &&
    info.title && (
      <div className={styles.container}>
        {
          <div ref={parent}>
            <div className={styles.topContainer}>
              <div className={styleType ? styles.white : styles.titleContainer}>
                <div className={styles.square}></div>
                <h6>{info?.title}</h6>
              </div>
              <div
                className={
                  dropDown
                    ? styleType
                      ? styles.dropDownBtnContainerActiveWhite
                      : styles.dropDownBtnContainerActive
                    : styleType
                    ? styles.dropDownBtnWhite
                    : styles.dropDownBtnContainer
                }>
                <button onClick={dropDownHandler}>
                  <svg
                    width="22"
                    height="13"
                    viewBox="0 0 22 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.3712 0.986467L10.9999 10.1215L1.62869 0.986467C1.46126 0.822925 1.2365 0.731367 1.00244 0.731367C0.768393 0.731367 0.543628 0.822925 0.376194 0.986467C0.295124 1.0659 0.230717 1.16071 0.186749 1.26535C0.14278 1.36998 0.120132 1.48234 0.120132 1.59584C0.120132 1.70934 0.14278 1.8217 0.186749 1.92634C0.230717 2.03097 0.295124 2.12578 0.376194 2.20522L10.3456 11.9252C10.5206 12.0959 10.7555 12.1914 10.9999 12.1914C11.2444 12.1914 11.4792 12.0959 11.6543 11.9252L21.6237 2.20709C21.7053 2.1276 21.7702 2.03256 21.8145 1.92757C21.8588 1.82259 21.8817 1.70979 21.8817 1.59584C21.8817 1.48189 21.8588 1.36909 21.8145 1.26411C21.7702 1.15913 21.7053 1.06408 21.6237 0.984591C21.4563 0.821049 21.2315 0.729492 20.9974 0.729492C20.7634 0.729492 20.5386 0.821049 20.3712 0.984591V0.986467Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {((info.imgs && !!info.imgs.length) || info.text) && dropDown && (
              <div className={styles.bottomContainer}>
                {!!info.imgs?.length && (
                  <div className={styles.imgsContainer}>
                    {!!info.imgs?.length &&
                      info.imgs.map((item, index) => {
                        return (
                          <div className={styles.img} key={item.imgUrl + index}>
                            <img src={item.imgUrl} alt={item.imgAlt} />
                          </div>
                        )
                      })}
                  </div>
                )}
                <div
                  className={
                    styleType ? styles.whiteText : styles.textContainer
                  }>
                  {info?.text && <p>{info.text}</p>}
                </div>
              </div>
            )}
          </div>
        }
      </div>
    )
  )
}

AccordionItem.propTypes = {
  info: PropTypes.object,
  styleType: PropTypes.string,
}

export default AccordionItem
