import React from 'react'

export const Tile = ({ contact }) => {
  const contactValues = Object.values(contact)
  return (
    <>
      {contactValues.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </>
  )
}
