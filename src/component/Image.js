import React from 'react'

class Image extends React.Component{

  render () {
    let thumbnail = this.props.content.thumbnail[0].url
    return(
      <div className="image">
        <img className="thumbnail" src = {thumbnail}/>
        <h1 className="title">{this.props.content.name}</h1>
        <h1 className="branding">{this.props.content.branding}</h1>
      </div>
    )
  }
}

export default Image
