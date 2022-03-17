import React from 'react'

export const EventList = (props) => {
    const events = props.events || []

    const listItems = events.map((event) =>
        <li key={event.id}>
            {event.name} {event.earlySaleDate} {event.liquidityDate}
        </li>
    )

    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

// {events.map((event) => <li key='1'>{event}</li>)}