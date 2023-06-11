import React from 'react';
const ContactosPage = (props) => {
    return (
        <main class="holder contacto"> 
        <div>
            <h2>¡Contactanos!</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nomvre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>

      
    </main>
    )
}
export default ContactosPage;