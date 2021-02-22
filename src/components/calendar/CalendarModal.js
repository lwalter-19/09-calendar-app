import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root');

const CalendarModal = () => {

    const [isOpend, setIsOpend] = useState(true);

    const closeModal = () => {
        setIsOpend(false)
    }

    return (
        <React.Fragment>
            <Modal
                isOpen={isOpend}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h1>Hola mundo</h1>
                <hr/>
                <span>Hola de nuevo</span>
            </Modal>
        </React.Fragment>
    )
}

export default CalendarModal
