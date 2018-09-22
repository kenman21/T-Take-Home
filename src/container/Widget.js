import React from 'react'
import Image from '../component/Image'

class Widget extends React.Component{
  render () {

    let images = this.props.images.map((image,index) => <Image key={index} content={image}/>)

    return (
      <div className="image-container">
        {images}
      </div>
    )
  }
}

export default Widget