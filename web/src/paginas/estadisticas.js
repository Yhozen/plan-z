import React, { Component } from 'react'

class Estadisticas extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  componentWillMount() {
    const nameRef = this.props.database.ref().child('vistos').child(this.props.user.uid)
    nameRef.on('value', snapshot => {
      let data = snapshot.val()
      console.log()
      let llaves = Object.keys(data)
      console.log(llaves)
      let n = llaves.length - 1
      let arreglo = data[llaves[n]]
      console.log(arreglo)
      this.setState({
       data: arreglo
      })
   })
  }
  render() {
    return (
    <div className="row">
      <h5>Haz hecho: </h5>
      {this.state.data.map(clase => {
        return (
          <p>Clase {clase}</p>
        )
      })}
      <button onClick={() => this.props.signOut()} className="col s12 waves-effect waves-light btn">Salir</button>
    </div>
    );
  }
}

export default Estadisticas;