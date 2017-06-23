import React, { Component } from 'react'

class Estadisticas extends Component {
  constructor() {
    super()
    this.state = {
      data: [': ninguna'],
    }
  }
  componentWillMount() {
    const nameRef = this.props.database.ref().child('vistos').child(this.props.user.uid)
    nameRef.on('value', snapshot => {
      let data = snapshot.val()
      if (data) {
        this.setState({data})
      }
     })
  }
  render() {
    return (
    <div className="row">
      <ul className="collection with-header">
        <li className="collection-header"><h5>Haz hecho: </h5></li>
      {this.state.data.map(clase => {
        return (
          <li className="collection-item">Clase {clase}</li>
        )
      })}
      </ul>
      <button onClick={() => this.props.signOut()} className="col s12 waves-effect waves-light btn">Salir</button>
    </div>
    );
  }
}

export default Estadisticas;
