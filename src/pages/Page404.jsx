import PageWrapper from '@components/PageWrapper/PageWrapper'
import styles from '../styles/page404.module.sass'

const Page404 = () => {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <h2>404</h2>
        <p>Сторінка, яку Ви шукаєте не знайдена або не існує.</p>
        <p>
          Повернутися <a href="/">На головну</a>.
        </p>
      </div>
    </PageWrapper>
  )
}

export default Page404
