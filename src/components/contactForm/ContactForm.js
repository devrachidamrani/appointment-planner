import React from 'react'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {/* include a pettern attribute to the phone input with a regex */}
      <input
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input type="submit" />
    </form>
  )
}
