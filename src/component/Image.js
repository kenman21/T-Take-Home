import React from 'react'

class Image extends React.Component{
  render () {
    return(
      <div className="image">
        {this.props.content.name}
      </div>
    )
  }
}

export default Image
