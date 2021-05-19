import React from 'react'
import { Tile } from '../tile/Tile'

import { useLocation } from 'react-router-dom'

export const TileList = props => {
  const location = useLocation()
  if (location.pathname === '/contacts') {
    return (
      <>
        {props.contacts.map((contact, index) => (
          <Tile key={index} contact={contact} />
        ))}
      </>
    )
  }

  return (
    <>
      {props.appointments.map((appointment, index) => (
        <Tile key={index} appointment={appointment} />
      ))}
    </>
  )
}
