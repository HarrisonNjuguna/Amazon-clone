import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="90829332"
            title="Apple TV 4K"
            price={25000}
            image="https://th.bing.com/th/id/R.99b7e7f92cebbcada8cfc3f1c38f4162?rik=wXpUfC%2fCx6dUvg&riu=http%3a%2f%2fwww.powerhouse.je%2fimages%2fapple-tv-4th-gen-32gb-p12807-28284_medium.jpg&ehk=ub1TXF%2fikmEDVVdzsM1NmQJoqWS5NJdVqX9O7zhwgPo%3d&risl=&pid=ImgRaw&r=0"
            rating={5}
          />
          <Product
            id="90829332"
            title="Ramtons Fruit Blender"
            price={7000}
            image="https://th.bing.com/th/id/R.2cf2aa0f960ecc4198d938ee84e0b1fe?rik=LZb7%2beFfGc27%2bg&pid=ImgRaw&r=0"
            rating={4}
          />
          <Product
            id="90829332"
            title="Apple TV 4K"
            price={25000}
            image="https://th.bing.com/th/id/R.99b7e7f92cebbcada8cfc3f1c38f4162?rik=wXpUfC%2fCx6dUvg&riu=http%3a%2f%2fwww.powerhouse.je%2fimages%2fapple-tv-4th-gen-32gb-p12807-28284_medium.jpg&ehk=ub1TXF%2fikmEDVVdzsM1NmQJoqWS5NJdVqX9O7zhwgPo%3d&risl=&pid=ImgRaw&r=0"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home
