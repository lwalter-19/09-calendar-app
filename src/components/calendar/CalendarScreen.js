import React from 'react';
import Navbar from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [{
    title: "Cumpleaños De Adriana",
    start: moment().toDate(),// New Data en moment
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
}];

const CalendarScreen = () => {
    return (
        <React.Fragment>
            <div className="calendar-screen">
                <Navbar/>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </React.Fragment>
    )
}

export default CalendarScreen
