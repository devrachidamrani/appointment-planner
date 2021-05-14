import React, { useState } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { AppointmentsPage } from '../containers/appointmentsPage/AppointmentsPage'
import { ContactsPage } from '../containers/contactsPage/ContactsPage'

const App = () => {
  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  }

  // Define state variables for contacts and appointments
  const [contacts, setContacts] = useState([
    {
      name: 'Rachid',
      phone: '+212777063048',
      email: 'rachid3alaoui@gmail.com',
    },
    { name: 'Halima', phone: '+33624063450', email: 'halima@gmail.com' },
  ])
  const [appointments, setAppointments] = useState([])

  // Implement functions to add data to contacts and appointments
  const addNewContact = (name, phone, email) => {
    setContacts(prevState => [...prevState, { name, phone, email }])
  }

  const addNewAppointment = (title, contact, date, time) => {
    setAppointments(prevState => [
      ...prevState,
      {
        id: uuidv4(),
        title,
        contact,
        date,
        time,
      },
    ])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage  */}
            <ContactsPage contacts={contacts} addNewContact={addNewContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              addNewAppointment={addNewAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App
