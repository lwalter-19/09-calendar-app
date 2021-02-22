import React, { useState }  from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

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

  const now = moment().minutes(0).seconds(0).add(1,'hours');
  const nowPlus1 = now.clone().add(1,'hours');

const CalendarModal = () => {

    const [ dateStart, setDateStart] = useState(now.toDate());
    const [ dateEnd, setDateEnd ] = useState(nowPlus1.toDate());
    const [ formValues, setFormValues ] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: nowPlus1.toDate()
    });

    const { title, notes, start, end } = formValues

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        
    }

    const handleStartDateChange = (ev) => {
        setDateStart( ev );
        setFormValues({
            ...formValues,
            start: ev
        })
    }

    const handleEndDateChange = (ev) => {
        setDateEnd( ev );
        setFormValues({
            ...formValues,
            end: ev
        })
    }

    const handleSubmitForm = (ev) => {
        ev.preventDefault();
        console.log(formValues);
    }

    return (
        <React.Fragment>
            <Modal
                isOpen={true}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form 
                    className="container"
                    onSubmit={ handleSubmitForm }
                >

                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker
                            className="form-control"
                            onChange={ handleStartDateChange }
                            value={ dateStart }
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker
                            className="form-control"
                            onChange={ handleEndDateChange }
                            value={ dateEnd }
                            minDate={ dateStart }
                        />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={ title }
                            onChange={ handleInputChange }
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group">
                        <textarea 
                            type="text" 
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={ notes }
                            onChange={ handleInputChange }
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>                
            </Modal>
        </React.Fragment>
    )
}

export default CalendarModal
