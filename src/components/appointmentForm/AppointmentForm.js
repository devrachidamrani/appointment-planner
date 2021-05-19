import React from 'react'
import { ContactPicker } from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }

  const handleContactChange = () => {
    console.log('Selected!')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input type="submit" />
      </form>
      <hr />
      <ContactPicker
        contacts={contacts}
        handleContactChange={handleContactChange}
      />
    </>
  )
}
