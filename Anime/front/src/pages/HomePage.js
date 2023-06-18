import '../styles/components/pages/HomePage.css';
import React from 'react';
const HomePage = (props) => {
    return (
        <main class="holder">
            <div class="columnas">
                <section class="intro">
                    <h2>¡Hola!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae animi aut mollitia eos
                        repudiandae
                        aliquam sed sit quibusdam. Perspiciatis itaque praesentium eligendi illo dolor ex cum, ea assumenda
                        expedita
                        vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloremque sit quam velit
                        ratione aperiam distinctio dolorem. Veritatis, error impedit voluptatibus qui nesciunt nihil
                        doloribus blanditiis cupiditate eveniet, sunt adipisci!
                    </p>
                </section>
                <section class="dibujo">
                    <img src="./Imagenes/minitotoro.png" alt="Ghibli"/>

                </section>
            </div>
        </main>
    )
}
export default HomePage;