import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {

    render() {
        return (
            <div>
                <label> {this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

// mapStateToProps é uma sugestão de nome
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

// Para o framework react-redux como mapear os actionsCreators para dentro do componente 
// a partir das propriedades.
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

//Uso do padrão decorator.
export default connect(mapStateToProps, mapDispatchToProps)(Field)