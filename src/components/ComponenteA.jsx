import React from 'react';
import { Contact } from '../models/contact.class';
import ComponenteB from './componenteB';

const ComponenteA = () => {

    const defaultContacto = new Contact('Tomas', 'Arias', 'tarias@gmail.com', true);

    return (
        <div>
            <div>
                Contacto:
            </div>
            {/*TODO: Aplicar un For/map para renderizar una lista*/}
            <ComponenteB contacto = { defaultContacto }></ComponenteB>
        </div>
    );
}

export default ComponenteA;








