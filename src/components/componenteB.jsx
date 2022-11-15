import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ComponenteB = ( {contacto} ) => {

    const [estado, setEstado] = useState( contacto.conectado );
    
    const cambiarEstado = () => {
        if (estado){
            setEstado(false);
        }else {
            setEstado(true); 
        }
        
    }

    return (
        <div>
            <h2>
                Nombre y apellido: { contacto.nombre } { contacto.apellido }
            </h2>
            <h4>
                email: { contacto.email }
            </h4>
            <h4>
                Estado: { estado ? 'CONTACTO EN LINEA' : 'CONTACTO NO DISPONIBLE' }
            </h4>
            <div>
                <button onClick = { cambiarEstado }>
                    Cambiar Estado
                </button>
            </div>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto : PropTypes.instanceOf(Contact)
};


export default ComponenteB;

