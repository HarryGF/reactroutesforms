import { Component } from 'react'
import './MenuRutas.css'

export default class   extends Component {
  render() {
    return (
        <div>
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
            </ul>
        </div>
    )
  }
}