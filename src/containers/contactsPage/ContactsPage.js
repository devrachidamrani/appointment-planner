import React, { useState } from 'react'
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ({ contacts, addNewContact }) => {
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addNewContact(contactName, contactPhone, contactEmail)
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={contactName}
          setName={setContactName}
          phone={contactPhone}
          setPhone={setContactPhone}
          email={contactEmail}
          setEmail={setContactEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  )
}
