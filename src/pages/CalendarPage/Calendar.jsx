import React from 'react';
import { useSelector } from 'react-redux'
import './Calendar.css'

const Calendar = () => {
  const userData = useSelector(state => state.userData)
  const {email} = userData
  return (
    <>
      <iframe className='calendar-frame' title='calendar' src={`https://calendar.google.com/calendar/embed?src=${(email)}`} />
    </>
  )
}

export default Calendar;