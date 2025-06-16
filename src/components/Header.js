import React from "react";
import '../Estilo/Header.css'

export default function Header() {
  const items = [
    {id: 1, label: 'Sobre mi', href:'#SobreMi'},
    {id: 2, label: 'Conocimientos', href: '#Conocimientos'},,
    {id: 2, label: 'Comentarios', href: '#Comentarios'},
    {id: 2, label: 'Mas informacion', href: '#Redes'}
    
  ];
  const itemsList = items.map((items) => (
    <li className="nav-item" key={items.id}>
      <a className="nav-link text-white nav-link-hover" 
      href={items.href}>
        {items.label}
      </a>
    </li>
  ));

  return (
    <nav 
    className="container navbar navbar-expand-lg navbar-light mt-3 p-2 shadow" 
    style={{borderRadius: '10px', backgroundColor: 'purple'}}>
      <a className="navbar-brand p-3 text-white" href="">
        Csanmart
      </a>
      <div className="d-flex justify-content-end collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">{itemsList}</ul>
      </div>
    </nav>
  );
}
