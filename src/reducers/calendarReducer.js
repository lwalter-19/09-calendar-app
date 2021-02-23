import moment from "moment";
import { types } from "../types/types";

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: "Cumpleaños De Adriana",
        start: moment().toDate(), // New Data en moment
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el pastel',
        user: {
            _id: '12345',
            name: 'Walter'
        }
    }],
    activeEvent: null
}


export const calendarReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        
        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload]
            }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    ev => ( ev.id === action.payload.id ) ? action.payload : ev
                )
            }
    
        default:
            return state;
    }
}