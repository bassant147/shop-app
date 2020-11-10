import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 8);

    this.setState({ spans });
  };

  render() {
    const { product_name,  img_url, price } = this.props.product;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <figure>
          <img ref={this.imageRef} alt='' src={img_url} />
          <figcaption>{product_name} — {price} egp</figcaption>
        </figure>        
      </div>
    );
  }
}

export default ImageCard;