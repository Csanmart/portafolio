import React from "react";
import { Card, CardBody } from "react-bootstrap";
import '../Estilo/Skills.css'

export default function Skills() {

    const dates = [
        {id: 1, name: 'Python',icon: <i class="fa-brands fa-python fa-2xl"></i>,years: '2 years'},
        {id: 1, name: 'Java', icon:<i class="fa-brands fa-java fa-2xl"></i>, years: '2 years'},
        {id: 1, name: 'JavaScript', icon: <i class="fa-brands fa-js fa-2xl" style={{color: 'yellow'}}></i>, years: '2 years'},
        {id: 1, name: 'React', icon: <i class="fa-brands fa-react fa-2xl"></i>, years: '2 years'},
        {id: 1, name: 'Node', icon: <i class="fa-brands fa-node fa-2xl"></i>, years: '2 years'}
    ]

    const dateCard = dates.map((date)=>(
        <Card key={date.id}  className="row aling-items-cente p-5 shadow skill-card col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center p-4 shadow skill-card h-100" style={{ width: '200px', textAlign: 'center', position: 'relative', margin: '10px' }}>
            <CardBody>
                <div>{date.icon}</div>
                <p className="mt-2">{date.name}</p>
                <span className="years-info">{date.years}</span>
            </CardBody>
        </Card>
    ));


    return (
        <section className="container  mt-5" id="Conocimientos">
            <h2 className="text-center shadowr" style={{color: 'purple', fontWeight:"bold"}}>Conocimientos</h2>
                <div className="d-flex justify-content-between mt-5 ">
                    {dateCard}
                </div>
        </section>
    );
}