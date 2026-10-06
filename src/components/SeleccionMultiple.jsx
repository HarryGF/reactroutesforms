import React, { Component } from 'react'

export default class extends Component {

    selectMultiple = React.createRef()

    mostrarSeleccionados = (event) => {
        event.preventDefault()
        let options = this.selectMultiple.current.options
        let data = ""
        for (var opt of options) {
            if(opt.selected == true) {
                data += opt.value + ", "
            }
        }
        this.setState({
            seleccionados: data
        })
    }

    state = {
        seleccionados: ""
    }

    render() {
        return (
            <div>
                <h1>Selección Multiple</h1>
                <h3 style={{color: 'red'}}>{this.state.seleccionados}</h3>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Seleccione elementos: </label>
                    <select size="6" multiple ref={this.selectMultiple}>
                        <option>Elemento 1</option>
                        <option>Elemento 2</option>
                        <option>Elemento 3</option>
                        <option>Elemento 4</option>
                        <option>Elemento 5</option>
                        <option>Elemento 6</option>
                        <option>Elemento 7</option>
                        <option>Elemento 8</option>
                    </select>
                    <button>Show selected</button>
                </form>  
            </div>
        )
    }
}
