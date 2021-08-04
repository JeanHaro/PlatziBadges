import React from 'react';
import md5 from 'md5';

// npm install md5, es una pequeña librería, una función que le vamos a dar texto y nos regresará el hash
// Al email le queremos sacar el valor del md5
// El hash que sacamos del email le pondrá como codigo y si estamos registrado en gravatar aparecerá nuestra foto
function Gravatar (props) {
    const email = props.email;
    const hash = md5(email);

    return (
        <img 
            className={props.className}
            src={`https://s.gravatar.com/avatar/${hash}?d=identicon`} 
            alt="Avatar"/>
    )
}

export default Gravatar;