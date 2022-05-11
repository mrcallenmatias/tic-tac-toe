import React, { Component } from 'react'

class Square extends Component{

  getIndex = () => {
    alert(this.props.value)
  }

  render(){
    return(
      <>
        <div 
          className="square"
          onClick={this.getIndex}>
        </div>
      </>
    )
  }
}
export default Square
