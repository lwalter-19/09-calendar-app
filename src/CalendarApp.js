import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

const CalendarApp = () => {
    return (
        <React.Fragment>
            <Provider
                store={ store }  
            >
                <AppRouter/>
            </Provider>
        </React.Fragment>
    )
}

export default CalendarApp
