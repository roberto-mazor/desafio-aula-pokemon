import React from 'react'
import './Card.css'

function Card(props) {
    return(
        <>
            <div className='card'> 
                <h2>#: {props.info.id}</h2>
                <h2>Nome: {props.info.nome}</h2>
                <h2>Tipo: {props.info.tipo}</h2>
                <img src={props.info.foto}/>
            </div>
        </>
    )
}

export default Card