import moment from "moment";
import { types } from "../types/types";

const initialState = {
    events: [{
        title: "Cumpleaños De Adriana",
        start: moment().toDate(),// New Data en moment
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
    
        default:
            return state;
    }
}