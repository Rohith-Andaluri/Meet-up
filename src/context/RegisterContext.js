import React from 'react'

const RegisterContext = React.createContext({
  registrationStatus: false,
  Name: '',
  topic: 'ARTS_AND_CULTURE',
  showError: false,
  changeRegistrationStatus: () => {},
  updateError: () => {},
  updateUserName: () => {},
  updateTopicName: () => {},
})

export default RegisterContext
