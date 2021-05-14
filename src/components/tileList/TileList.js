import React from 'react'
import { Tile } from '../tile/Tile'

export const TileList = ({ contacts }) => {
  return (
    <>
      {contacts.map(contact => (
        <Tile key={contact.id} contact={contact} />
      ))}
    </>
  )
}
