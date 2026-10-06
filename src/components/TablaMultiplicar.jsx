import React, { Component } from 'react'

export default class  extends Component {

    cajaNumero = React.createRef()

    enviarInfo = (event) => {
        event.preventDefault()
        let num = parseInt(this.cajaNumero.current.value)
        let aux = []
        for(let i = 1; i <= 10; i++) {
            let numero = num * i
            aux.push(numero)
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
                <h1> Tabla de multiplicar</h1>
                <form onSubmit={this.enviarInfo}>
                    <label>Numero: </label>
                    <input type='number' ref={this.cajaNumero}/>
                    <button>Enviar información</button>
                </form>
                <table>
                    <tr>
                        {
                            this.state.numeros.map((num, index) => {
                                return(
                                    <th key={index}>{this.cajaNumero.current.value} * {index+1}</th>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        {
                            this.state.numeros.map((num, index) => {
                                return(
                                    <td key={index}>{num}</td>
                                )
                            })
                        }
                    </tr>
                </table>
            </div>
        )
    }
}
