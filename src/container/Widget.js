import React from 'react'
import Image from '../component/Image'

class Widget extends React.Component{
  
  render () {

    let images = this.props.images.map((image,index) => <Image key={index} content={image}/>)

    return (
      <div className="image-container">
        <div className="widget-header">
          {window.navigator.language === 'en-US' ? <h1 className="widget-title">You May Enjoy</h1> : <h1 className="widget-title">Te Podría Gustar</h1>}
          <div className="disclosure-container">
            <h1 className="widget-disclosure"> Sponsored Links By Taboola </h1>
            <div className="favicon-container"><img className="favicon" src="https://www.taboola.com/sites/all/themes/taboola2017/images/taboola/favicon.png"/></div>
          </div>
        </div>
        {images}
      </div>
    )
  }
}

export default Widget
