import React, { Component } from 'react'

export default class FormSimple extends Component {

    cajaNombre = React.createRef()

    enviarInfo = (event) => {
        event.preventDefault()
        let nombre = this.cajaNombre.current.value
        console.log("Datos enviados" + nombre)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.enviarInfo}>
                    <label>Nombre: </label>
                    <input type='text' ref={this.cajaNombre}/>
                    <button>Enviar información</button>
                </form>
            </div>
        )
    }
}
