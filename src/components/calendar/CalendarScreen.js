import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'; // importacion para que se configure en español el calendario

import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';


moment.locale('es');// Cambiamos el idioma al español con moment
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const CalendarScreen = () => {
   
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar)

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month') 

    const onDoubleClick = (ev) => {  
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (ev) => {
        dispatch(eventSetActive(ev));
    }

    const onViewChange = (ev) => {
        setLastView(ev)
        localStorage.setItem('lastView', ev);
    }

    const onSelectSlot = (ev) => {
        dispatch(eventClearActiveEvent());
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <React.Fragment>
            <div className="calendar-screen">
                <Navbar/>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    messages={ messages }
                    eventPropGetter = { eventStyleGetter }
                    onDoubleClickEvent= { onDoubleClick }
                    onSelectEvent={ onSelectEvent }
                    onView={ onViewChange }
                    onSelectSlot={ onSelectSlot }
                    selectable={ true }
                    view={ lastView }
                    components={{
                        event: CalendarEvent
                    }}
                />
                <AddNewFab/>
                {
                    ( activeEvent ) &&  <DeleteEventFab/> 
                }
                <CalendarModal/>
            </div>
        </React.Fragment>
    )
}

export default CalendarScreen
