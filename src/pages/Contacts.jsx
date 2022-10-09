import React from 'react'
import ContactsForm from '@components/ContactsForm/ContactsForm'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import styles from '../styles/contacts.module.sass'

const Contacts = () => {
  return (
    <PageWrapper>
      <div className={styles.contactsContainer}>
        <section>
          <ContactsForm />
        </section>
      </div>
    </PageWrapper>
  )
}

export default Contacts
