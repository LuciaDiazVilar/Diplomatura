import '../styles/components/pages/LoginPage.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const LoginPage = (props) => {
  const initialForm ={
    usuario: '',
    contraseña: ''
  }
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState ('Procesando');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name] : value
    }));
  }

  const handleSubmit = async e=> {
    e.preventDefault();
    setMsg ('');
    setSending(true)
    const response = await
    axios.post('http://localhost:3000/admin/login', formData);
    setSending(false);
    setMsg (response.data.menssage);
    if (response.data.error === false){
      setFormData(initialForm)
    }

  }

  return (
    <main class="holder">
      <div class="container">
        <div class="row">
          <form action="/login" method="post" class='formulariologin'>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="inputUser" placeholder="usuario" name="usuario"/>
                <label for="floatingInput">Usuario</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="inputPassword" placeholder="Contraseña" name="password"/>
                <label for="floatingPassword">Contraseña</label>
            </div>
            <div>
              <button type="submit" class="btn btn-primary">Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </main>
    )
    }
export default LoginPage;
