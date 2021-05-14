import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

import { AppointmentsPage } from '../containers/appointmentsPage/AppointmentsPage'
import { ContactsPage } from '../containers/contactsPage/ContactsPage'

const App = () => {
  // Define state variables for contacts and appointments
  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  }
  // Implement functions to add data to contacts and appointments
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>{' '}
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage  */}
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App
