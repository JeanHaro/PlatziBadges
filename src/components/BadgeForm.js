import { div } from 'prelude-ls';
import React from 'react';

class BadgeForm extends React.Component {
    handleChange = (e) => {
        // {value: e.target.value} - para obtener el texto que colocamos en el input
        // {name: e.target.name} - para obtener el nombre del innput del cual recibimos los valores
        console.log({
            name: e.target.name,
            value: e.target.value
        });
    }
    
    handleClick = (e) => {
        console.log('Button was clicked');
    }
    

    handleSubmit = e => {
        // Para que no envíe el formulario
        e.preventDefault();
        console.log('Form was submitted');
    }

    // Eventos para leer lo que está dentro en nuestra caja de texto (input)
    // onChange - Cada vez que escribimos en el input obtenemos el evento
    // onClick - Cada vez que damos click al botón obtenemos el evento
    /* Colocando el atributo type="button" en el button, para que no recargue la página ya que por default 
    es submit */
    // onSubmit - Evento cuando se envía el formulario
    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;