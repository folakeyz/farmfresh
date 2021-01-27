import React from 'react';
import styles from './styles.module.css';
import './style.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import slide from '../../assets/Slide.JPG';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';


const Slider = () => {
    return (
      <div className={styles.carousel}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

      </div>
    )
}
export default Slider;