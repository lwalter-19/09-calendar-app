import React from 'react';

const CalendarEvent = ({ event }) => {

    const { title, user } = event;

    return (
        <React.Fragment>
            <div>
            <strong>{ title }</strong>
            <span>{ user.name }</span>
            </div>
        </React.Fragment>
    )
}

export default CalendarEvent
