import React from 'react'
import Image from '../component/Image'

class Widget extends React.Component{
  render () {

    let images = this.props.images.map((image,index) => <Image key={index} content={image}/>)

    return (
      <div className="image-container">
        <div className="widget-header">
          <h1 className="widget-title">You May Like</h1>
          <h1 className="widget-disclosure"> Sponsored Links By Taboola </h1>
        </div>
        {images}
      </div>
    )
  }
}

export default Widget
