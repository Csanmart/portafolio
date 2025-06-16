import React from "react";
import { Card, Form } from "react-bootstrap";


export default function comentario(){
    const comentarios = [
        {id: 1, name: 'Google', text:'Envianos tu hoja de vida a nuestro correo te queremos contratar'},
        {id: 2, name: 'Apple', text:'Que buena pagina espero que consigas un trabajo rapido y si no encuentras puedes enviarla a nuestro correo.'},
        {id: 3, name: 'Servientrega', text: 'No tenemos un desarrollador asi en nuestras filas envianos tu hoja de vida.'}
    ]
    const listComentarios = comentarios.map((coment)=>(
        <Card key={coment.id} className="mt-3 ">
            <h2>{coment.name}</h2>
            <p>{coment.text}</p>
        </Card>
    ))
    
    return(
        <section style={{ background: 'purple' }} className="container p-4 rounded">
    <h3 className="text-white text-center mb-4">Caja de comentarios</h3>
    <Form>
        <div className="mb-3">
            <input
                className="form-control"
                placeholder="Ingrese su nombre..."
            />
        </div>
        <div className="mb-3">
            <textarea
                className="form-control"
                rows="3"
                placeholder="Escriba su comentario..."
            ></textarea>
        </div>
        <button type="submit" className="btn btn-light">
            Enviar Comentario
        </button>
    </Form>
        <div className="mt-3 text-white">
            <h3>Comentarios:</h3>
            {listComentarios}
        </div>
</section>
    );  
}