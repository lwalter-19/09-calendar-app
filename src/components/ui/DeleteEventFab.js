import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventDeleted } from '../../actions/events';

const DeleteEventFab = () => {

    const dispatch = useDispatch();
    const { activeEvent } = useSelector(state => state.calendar);

    const handleDelete = () => {
        dispatch(eventDeleted(activeEvent));
    }

    return (
        <React.Fragment>
            <button
                className="btn btn-danger fab-danger"
                onClick={ handleDelete }
            >
                <i className="fa fa-trash"></i>
                <span> Borrar Evento</span>
            </button>
        </React.Fragment>
    )
}

export default DeleteEventFab
