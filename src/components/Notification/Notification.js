// ** POP UP MESSAGES **

import React from 'react'

export const Notification = ({message}) => {
  return (
    <div className='notificationCont'>
      <span className='notificationClose'>X</span>
      <span>
        {message || 'please add a custom message'}
      </span>
    </div>
  )
}
