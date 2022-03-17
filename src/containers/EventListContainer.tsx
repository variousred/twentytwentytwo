import React from 'react'
import { EventForm } from '../components/EventForm'
import { EventList } from '../components/EventList'

export const EventListContainer = (props) => {
    const events = props.events || []
    const handleSubmit = (coin) =>{
        props.handleSubmit(coin)
    }
    return (
        <div>
            <h1>Upcoming Token Events</h1>
            <EventList events={events}/>
            <EventForm handleSubmit={handleSubmit}/>
        </div>
    )
}