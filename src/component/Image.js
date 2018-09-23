import React from 'react'

class Image extends React.Component{

  render () {
    let thumbnail = this.props.content.thumbnail[0].url
    return(
      <div className="image">
        <img className="thumbnail" src = {thumbnail}/>
        <h1 className="image-title">
          <a className="image-link" href={this.props.content.url}>
            {this.props.content.name}
          </a>
        </h1>
        <h1 className="image-branding">
          <a className="image-link" href={this.props.content.url}>
            {this.props.content.categories ? this.props.content.categories[0][0].toUpperCase() + this.props.content.categories[0].substr(1):null} || {this.props.content.branding}
          </a>
        </h1>
      </div>
    )
  }
}

export default Image
