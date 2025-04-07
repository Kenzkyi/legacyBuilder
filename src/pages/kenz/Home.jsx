import React from 'react'
import '../../styles/home.css'
import home1 from '../../assets/public/home-firstlayer.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-firstLayer">
        <div className="home-firstLayerCircle">
          <aside/>
        </div>
        <div className="home-firstLayerSmallCircle"></div>
        <div className="home-firstLayerHolder">
          <main>
            <section>
              <h5>Score <span style={{color:'#804BF2'}}>300+</span> in JAMB with Legacy Builders</h5>
              <p>Get the right resources, practice past questions, 
                  and track your progress to unlock your 
                  best JAMB score yet!</p>
            </section>
            <button>LEARN MORE</button>
          </main>
          <nav>
            <aside>
              <div/>
            </aside>
            <article/>
            <img src={home1} alt="Educational aspirant" />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Home
