import React, { Component } from 'react'

 class Input extends Component {

    constructor(props) {
      super(props)
         this.inputRef = React.createRef()
      }


    foucsInput() {
        this.inputRef.current.foucs()
    }
  render() {
    return (
      <div>
          <input type="text" ref = {this.inputRef} />
      </div>
    )
  }
}

export default Input