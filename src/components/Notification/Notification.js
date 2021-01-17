// ** POP UP MESSAGES **

import React from 'react'

export const Notification = ({message}) => {
  return (
    <div className='notificationCont'>
      <span className= 'notificationText'>
        {message || 'please add a custom message'}
      </span>
      <span className='notificationClose'>X</span>
    </div>
  )
}
