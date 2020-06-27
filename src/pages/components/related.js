import React from 'react';
import './related.css';

function Related(props) {
  return (
    <div className="Related">
      <h1>La mejor plataforma de videos</h1>
      <h2>Lo Más Visto</h2>
      <ol className="list">
        <li>El señor de los anillos: el retorno del rey</li>
        <br/>
        <li>El club de la pelea</li>
        <br/>
        <li>Star Wars</li>
        <br/>
        <li>Toy Story 3</li>
        <br/>
        <li>Contratiempo</li>
        <br/>
        <li>Wall-E</li>
        <br/>
        <li>El cisne negro</li>
        <br/>
        <li>Origen</li>
        <br/>
        <li>Efecto mariposa</li>
        <br/>
        <li>Star Trek</li>
      </ol>
    </div>
  )
}

export default Related;