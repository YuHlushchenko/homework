import React from 'react'
import ContactsForm from '../components/ContactsForm/ContactsForm'
import Footer from '../components/Footer/Footer'
import styles from '../styles/contacts.module.sass'

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
        <section>
            <ContactsForm />
        </section>

        <section>
            <Footer />
        </section>
    </div>
  )
}

export default Contacts