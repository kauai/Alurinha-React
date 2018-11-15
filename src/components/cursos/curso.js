import React,{ Fragment } from 'react'

const Curso = ({ name }) => 
    (
      <Fragment>
         	<li className="conteudoPrincipal-cursos-link">
               <a href="#">{ name }</a>
            </li>
      </Fragment>
    )

export default Curso