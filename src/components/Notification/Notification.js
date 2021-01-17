// ** POP UP MESSAGES **

import React from 'react'

export const Notification = ({closeNotification, message}) => {
  return (
    <div className='notificationCont'>
      <span className= 'notificationText'>
        {message || 'please add a custom message'}
      </span>
      <span className='notificationClose' onClick= {() => closeNotification()}>X</span>
    </div>
  )
}
