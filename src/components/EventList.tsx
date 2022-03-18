import React from 'react'

export const EventList = (props) => {
    const events = props.events || []

    const listItems = events.map((event, key) => (
        <li key={key}>
            {event.name}
            {JSON.stringify(event.earlySaleDate)}
            {JSON.stringify(event.liquidityDate)}
        </li>
    ))

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

