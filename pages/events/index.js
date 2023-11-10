import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events.search'
import { getAllEvents } from '@/dummy-data'
import React from 'react'

const AllEventsPAge = () => {
  const events = getAllEvents()
  return (
    <div>
        <EventsSearch/>
        <EventList items={events}/>
    </div>
  )
}

export default AllEventsPAge