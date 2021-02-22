import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch(uiOpenModal())
    }

    return (
        <React.Fragment>
            <button
                className="btn btn-primary fab"
                onClick={ handleClickNew }
            >
                <i className="fas fa-plus"></i>
            </button>
        </React.Fragment>
    )
}

export default AddNewFab
