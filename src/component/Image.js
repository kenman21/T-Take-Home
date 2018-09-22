import React from 'react'

class Image extends React.Component{

  render () {
    let thumbnail = this.props.content.thumbnail[0].url
    return(
      <div className="image">
        <img className="thumbnail" src = {thumbnail}/>
        <h1 className="title">
          <a className="link" href={this.props.content.url}>
            {this.props.content.name}
          </a>
        </h1>
        <h1 className="branding">
          <a className="link" href={this.props.content.url}>
            {this.props.content.branding}
          </a>
        </h1>
      </div>
    )
  }
}

export default Image
