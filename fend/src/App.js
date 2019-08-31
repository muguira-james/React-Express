import React from 'react';

import './App.css';
import axios from 'axios'


class Table extends React.Component {
  render() {
    // console.log("props--->", this.props.graph)
    return (
      <div>
        <table>
          <tr>
            <th>Current players</th>
            <th>Hole</th>
            <th>Location</th>
          </tr>
          <tbody>
            {
              this.props.graph.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{el.FirstName} {el.LastName}</td>
                    <td>{el.Hole} </td>
                    <td>{el.HoleLocation}</td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </div>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      url: 'http://localhost:9000/api/all',
      urlCreate: 'http://localhost:9000/api/create',
      result: null
    }
  }

  componentDidMount() {
    let it = this.get()
    this.setState({ graph: it })
  }

  get() {
    let URL = this.state.url
    axios.get(URL).then((res) => {
      // console.log("it == ", res.data)
      // let graph = []
      // res.data.map( el => {
      //   // console.log("el-->", el.FirstName)
      //   graph.push(el)
      // })
      // let graph = res.data

      this.setState({ graph: res.data })
    })
  }

  create = () => {
    axios.get(this.state.urlCreate)
  }
  render() {
    // console.log("state-->", this.state)
    let plyrs = null

    if ((typeof this.state.graph === 'object') && (this.state.graph !== null)) {

      plyrs = <Table graph={this.state.graph}></Table>
    } else {
      plyrs = null
    }
    return (
      <div className="App">
        <button onClick={this.create} >Create</button>
        {plyrs}
      </div>
    );
  }

}


