import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Portfolio.module.sass'
import './Portfolio.css'
import { CSSTransition } from 'react-transition-group'

const Portfolio = ({ data }) => {
  const [showImgs, setShowImgs] = useState(false)
  const [zoom, setZoom] = useState(null)
  const [countShownImgs, setCountShownImgs] = useState(data.imgSrcs.slice(0, 6))
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (zoom && ref.current && !ref.current.contains(e.target)) {
        setZoom(null)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [zoom])

  useEffect(() => {
    showImgs ? setCountShownImgs(data.imgSrcs) : setCountShownImgs(data.imgSrcs.slice(0, 6))

  }, [showImgs, data])

  return (
    <div className={styles.portfolioContainer}>
      <h3>{data?.title}</h3>
      <div className={styles.brLine}></div>
      <div className={styles.mainContantContainer}>
        <div className={styles.photosContainer}>
          <CSSTransition
            in={showImgs}
            timeout={500}
          >
            {
              state => countShownImgs && countShownImgs.map((item, index) => {
                return (
                  <div key={index + 1}>
                    <div className={index + 1 >= 7 ? `${styles.imgContainer} ${state}` : `${styles.imgContainer}`}>
                      <button type="button" onClick={() => setZoom(index + 1)}>
                        <img src={item} alt={data?.alt} />
                      </button>
                    </div>

                    <div
                      className={
                        zoom === index + 1 ? styles.zoomContainer : styles.hide
                      }
                      ref={ref}>
                      <img src={item} alt={data?.alt} />

                      <div className={styles.closeZoomContainer}>
                        <button type="button" onClick={() => setZoom(null)}>
                          <svg
                            width="28"
                            height="29"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M18 6.5L6 18.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 6.5L18 18.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </CSSTransition>
        </div>

        <div
          className={
            showImgs
              ? `${styles.bttnContainer} ${styles.arrowUp}`
              : styles.bttnContainer
          }>
          <button
            type="button"
            onClick={() => {
              setShowImgs(!showImgs)
            }}>
            <svg
              width="81"
              height="93"
              viewBox="0 0 81 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M57.493 18.641L40 35.693L22.507 18.641C22.1945 18.3357 21.7749 18.1648 21.338 18.1648C20.9011 18.1648 20.4815 18.3357 20.169 18.641C20.0177 18.7893 19.8975 18.9663 19.8154 19.1616C19.7333 19.3569 19.691 19.5666 19.691 19.7785C19.691 19.9904 19.7333 20.2001 19.8154 20.3954C19.8975 20.5907 20.0177 20.7677 20.169 20.916L38.7785 39.06C39.1053 39.3785 39.5436 39.5568 40 39.5568C40.4564 39.5568 40.8947 39.3785 41.2215 39.06L59.831 20.9195C59.9834 20.7711 60.1045 20.5937 60.1873 20.3977C60.27 20.2018 60.3126 19.9912 60.3126 19.7785C60.3126 19.5658 60.27 19.3552 60.1873 19.1593C60.1045 18.9633 59.9834 18.7859 59.831 18.6375C59.5185 18.3322 59.0989 18.1613 58.662 18.1613C58.2251 18.1613 57.8056 18.3322 57.493 18.6375V18.641Z"
                fill="#FFFFFF"
              />
              <path
                d="M65.8025 30.9575L40.5001 59.276L15.1977 30.9575C14.7456 30.4505 14.1388 30.1667 13.5068 30.1667C12.8749 30.1667 12.268 30.4505 11.816 30.9575C11.5971 31.2037 11.4232 31.4976 11.3045 31.822C11.1857 32.1464 11.1246 32.4947 11.1246 32.8465C11.1246 33.1984 11.1857 33.5467 11.3045 33.8711C11.4232 34.1954 11.5971 34.4893 11.816 34.7356L38.7333 64.8676C39.206 65.3966 39.84 65.6927 40.5001 65.6927C41.1602 65.6927 41.7942 65.3966 42.2669 64.8676L69.1842 34.7414C69.4046 34.495 69.5799 34.2003 69.6995 33.8749C69.8191 33.5494 69.8808 33.1998 69.8808 32.8465C69.8808 32.4933 69.8191 32.1436 69.6995 31.8182C69.5799 31.4927 69.4046 31.1981 69.1842 30.9516C68.7321 30.4447 68.1253 30.1608 67.4933 30.1608C66.8614 30.1608 66.2545 30.4447 65.8025 30.9516V30.9575Z"
                fill="#FFFFFF"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  data: PropTypes.object,
}

export default Portfolio
