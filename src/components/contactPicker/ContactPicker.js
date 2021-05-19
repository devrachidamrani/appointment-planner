import React from 'react'

export const ContactPicker = ({ contacts, handleContactChange }) => {
  return (
    <>
      <h1> Contact Picker </h1>
      <select onChange={handleContactChange}>
        {' '}
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  )
}
