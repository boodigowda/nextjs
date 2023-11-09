import Link from 'next/link'
import React from 'react'
import classes from './event-list-item.module.css'

const EventListItem = (props) => {
    const {title, image, date, location, id} = props?.event;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });

    const formattedAddress = location?.replace(', ', '\n');

    const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
        <img src={'/' + image} alt="" />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}><time>{humanReadableDate}</time></div>
                <div className={classes.address}><address>{formattedAddress}</address></div>
            </div>
            <div className={classes.actions}>
                <Link href={exploreLink}>Explore Event</Link>
            </div>
        </div>
    </li>
  )
}

export default EventListItem