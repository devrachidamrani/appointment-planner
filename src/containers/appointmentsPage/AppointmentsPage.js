import React, { useState } from 'react'
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from '../../components/tileList/TileList'

export const AppointmentsPage = ({
  appointments,
  addNewAppointment,
  contacts,
}) => {
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addNewAppointment(title, contact, date, time)
    setTitle('')
    setTime('')
    setContact('')
    setDate('')
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          time={time}
          setTime={setTime}
          date={date}
          setDate={setDate}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  )
}
