import React, { useState } from 'react'
import { EventCalendarContainer } from './EventCalendarContainer'
import { EventListContainer } from './EventListContainer'

export const EventsDashboard = (props) => {
    const [events, setEvents] = useState([
        {id: 1, name: 'KibaInu', earlySaleDate: '3/16/22', liquidityDate: '3/17/22'},
        {id: 2, name: 'CoinViewCap', earlySaleDate: '3/21/22', liquidityDate: '4/1/22'}
    ])

    const createCoin = (coin) => {
        console.log("eventsdashboard#createCoin")
        setEvents((prev) => {
            console.log('coin: ', JSON.stringify(coin))
            console.log('prev: ', JSON.stringify(prev))

            return [coin, ...prev]
        })
    }

    return(
        <div>
        <EventCalendarContainer events={events}/>
        <EventListContainer events={events} handleSubmit={createCoin}/>
        </div>
    )
}