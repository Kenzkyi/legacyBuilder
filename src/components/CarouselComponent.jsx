import React from 'react'
import '../styles/home.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CarouselComponent = () => {
  return (
    <Carousel  responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            /* responsive={responsive} */
            ssr={true}
            infinite={true}
            autoPlay={ false} 
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            /* deviceType={this.props.deviceType} */
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
      >
        <div className="home-nineLayerHolder">
          <h3>“</h3>
          <p>"I thought getting 250+ in JAMB was impossible for me. 
              But Legacy Builders gave me the resources, mock tests, 
              and motivation I needed. The practice quizzes helped 
              me prepare and I scored 305.
          </p>
          <nav>
            <div>
              <img src="" alt="" />
            </div>
            <h6>Emeka (University of Lagos) </h6>
            <article>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
            </article>
          </nav>
        </div>
        <div className="home-nineLayerHolder">
          <h3>“</h3>
          <p>"I thought getting 250+ in JAMB was impossible for me. 
              But Legacy Builders gave me the resources, mock tests, 
              and motivation I needed. The practice quizzes helped 
              me prepare and I scored 305.
          </p>
          <nav>
            <div>
              <img src="" alt="" />
            </div>
            <h6>Emeka (University of Lagos) </h6>
            <article>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
            </article>
          </nav>
        </div>
        <div className="home-nineLayerHolder">
          <h3>“</h3>
          <p>"I thought getting 250+ in JAMB was impossible for me. 
              But Legacy Builders gave me the resources, mock tests, 
              and motivation I needed. The practice quizzes helped 
              me prepare and I scored 305.
          </p>
          <nav>
            <div>
              <img src="" alt="" />
            </div>
            <h6>Emeka (University of Lagos) </h6>
            <article>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
            </article>
          </nav>
        </div>
        <div className="home-nineLayerHolder">
          <h3>“</h3>
          <p>"I thought getting 250+ in JAMB was impossible for me. 
              But Legacy Builders gave me the resources, mock tests, 
              and motivation I needed. The practice quizzes helped 
              me prepare and I scored 305.
          </p>
          <nav>
            <div>
              <img src="" alt="" />
            </div>
            <h6>Emeka (University of Lagos) </h6>
            <article>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
            </article>
          </nav>
        </div>
        {/* <div className="home-nineLayerHolder">
          <h3>“</h3>
          <p>"I thought getting 250+ in JAMB was impossible for me. 
              But Legacy Builders gave me the resources, mock tests, 
              and motivation I needed. The practice quizzes helped 
              me prepare and I scored 305.
          </p>
          <nav>
            <div>
              <img src="" alt="" />
            </div>
            <h6>Emeka (University of Lagos) </h6>
            <article>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
            </article>
          </nav>
        </div> */}
      </Carousel>
  )
}

export default CarouselComponent
