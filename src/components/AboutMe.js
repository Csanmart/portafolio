import dev from '../assets/img/R.png'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function AboutMe(){

    return(
        <Container className='mt-5' style={{fontFamily: "fantasy"}} id='SobreMi'>
            <Row className="aling-items-center">
                <Col md={6}>
                    <img src={dev} style={{borderRadius: '50%', border: '1px solid black',}} alt="Programador" className="img-fluid shadow" ></img>
                </Col>
                <Col md={6} className='mt-2'>
                    <h2 style={{color: 'purple', fontWeight:'bold', textAlign: 'center'}}>Sobre mí</h2>
                    <p>
                        Soy programador con pasión por la tecnología y el desarrollo de soluciones eficientes. Me especializo en crear aplicaciones funcionales y bien estructuradas, siempre enfocado en escribir código limpio y mantener buenas prácticas. En este portafolio encontrarás algunos de mis proyectos, donde aplico mis conocimientos en desarrollo web, bases de datos y automatización. Siempre estoy aprendiendo y buscando nuevos desafíos que me permitan crecer como profesional.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}