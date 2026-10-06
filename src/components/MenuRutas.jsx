import { Component } from 'react'
import './MenuRutas.css'

export default class   extends Component {
  render() {
    return (
        <div id='menu'>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/cine">Cine</a>
                </li>
                <li>
                    <a href="/musica">Música</a>
                </li>
                <li>
                    <a href="/form">Formulario</a>
                </li>
                <li>
                    <a href="/collatz">Conjetura Collatz</a>
                </li>
                <li>
                    <a href="/tabla">Tabla Multiplicar</a>
                </li>
                <li>
                    <a href="/tablav2">Tabla Multiplicar V2</a>
                </li>
                <li>
                    <a href="/seleccionmultiple">Seleccion Multiple</a>
                </li>
            </ul>
        </div>
    )
  }
}