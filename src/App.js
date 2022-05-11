import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div 
          className="gameDesign">
          {this.state.squares.map(value => {
            return <Square value={value}/>
          })}
        </div>
        
      </>
    )
  }
}
export default App
