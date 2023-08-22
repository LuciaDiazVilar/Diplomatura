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
    console.log('HandleSubmit: ', formData)
    setSending(true)

    const response = await
    axios.post({
      url:'/login',
      data:formData
    });
    setSending(false);
  
  
    if (response.data.error === false){
      setFormData(initialForm)
    }
  }

  return (
    <main class="holder">
      <div class="container">
          <form action="/login" method="post" class='formulariologin' onSubmit={handleSubmit}>
            <p>
              <input type="text" class="form-control" id="inputUser" placeholder="Usuario" name="usuario" value={formData.usuario} onChange={handleChange}/>
                <label for="floatingInput"></label>
            </p>
            <p>
              <input type="password" class="form-control" id="inputPassword" placeholder="Contraseña" name="contraseña" onChange={handleChange} />
                <label for="floatingPassword"></label>
            </p>
            <p>
              <button type="submit" class="btn btn-primary" >Ingresar
              </button>
            </p>
          </form>
        </div>
      
    </main>
    )
    }
export default LoginPage;
