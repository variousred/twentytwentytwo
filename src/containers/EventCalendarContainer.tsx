import React, { useState } from 'react'


import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'



// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const myEventsList = []

export const EventCalendarContainer = (props) => {
  const events = props.events
  const myEventsList = events.flatMap((event) => {
    return [{ title: event.name, start: event.earlySaleDate, end: event.earlySaleDate },
    { title: event.name, start: event.liquidityDate, end: event.liquidityDate }]
  })

  return (
    <div className="myCustomHeight" style={{ height: 700, marginTop: '1em' }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}