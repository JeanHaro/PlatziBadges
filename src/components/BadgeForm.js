import { div } from 'prelude-ls';
import React from 'react';

class BadgeForm extends React.Component {
    // Inicializamos el estado en un objeto vacio
    // Se va llenando cada avez que colocamos datos en los input
    // state = {};

    // Inicializamos el estado en un objeto con algun valor
    // Si es una conferencia de diseñadores
    // Veremos ese valor escrito en el input
    state = {
        jobTitle: 'Designer'
    }

    handleChange = (e) => {
        // {value: e.target.value} - para obtener el texto que colocamos en el input
        // {name: e.target.name} - para obtener el nombre del innput del cual recibimos los valores
        /* console.log({
            name: e.target.name,
            value: e.target.value
        }); */

        // Guardamos la información en estado
        this.setState({
            // firstName el nombre del input y guardamos el valor que tendrá el input
            // Pero si añadimos más input, todos se guardarán en firstName
            // firstName: e.target.value,

            /* Esto lo que va ser, si es el input del email que llama a esta función, se va a guardar 
            la función dentro de la llave email, si es en twitter dentro de la llave twitter y asi */
            [e.target.name] : e.target.value,
        })
    }
    
    handleClick = (e) => {
        console.log('Button was clicked');
    }
    

    handleSubmit = e => {
        // Para que no envíe el formulario
        e.preventDefault();
        console.log('Form was submitted');
        // Cuando enviemos el formulario leemos todo el estado
        console.log(this.state);
    }

    // El value es lo que va a tener y va a desplegar cada uno de los input
    // En value ponemos this.state.firstName - para leer lo que está en firstName
    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text"
                            name="firstName" 
                            value={this.state.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            value={this.state.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            value={this.state.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.state.jobTitle} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.state.twitter} 
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;