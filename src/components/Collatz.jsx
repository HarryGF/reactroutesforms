import React, { Component } from 'react'

export default class Collatz extends Component {

    cajaNumero = React.createRef()

    enviarInfo = (event) => {
        event.preventDefault()
        let num = parseInt(this.cajaNumero.current.value)
        let aux = []
        while (num != 1) {
            if (num % 2 == 0) {
                num = num / 2
            } else {
                num = num * 3 + 1
            }
            aux.push(num)
        }
        this.setState({
            numeros:aux
        })
    }

    state = {
        numeros: []
    }

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.enviarInfo}>
                    <label>Numero: </label>
                    <input type='number' ref={this.cajaNumero}/>
                    <button>Enviar información</button>
                </form>
                <ul>
                    {
                        this.state.numeros.map((num, index) => {
                            return(
                                <li key={index}>{num}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
