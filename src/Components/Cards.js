import React from 'react'
import CardItem from './CardItem'
import '../Styles/cards.css'
import Img9 from '../Assets/images/img-9.jpg'
import Img8 from '../Assets/images/img-8.jpg'
import Img1 from '../Assets/images/img-1.jpg'
import Img4 from '../Assets/images/img-4.jpg'
import Img2 from '../Assets/images/img-2.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out These Awesome Travel Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={Img9} text="Explore the hidden waterfall deep inside the Amazon jungle" label='Adventure' path='/services' />
                        <CardItem src={Img8} text="Ride through the Sahara Desert on a guided camel tour" label='Adrenaline' path='/services' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={Img2} text="Travel through the Islands of Bali in a private Cruise" label='Luxary' path='/services' />
                        <CardItem src={Img4} text="Experience football on top of the Himalyan Mountains" label='Adventure' path='/services' />
                        <CardItem src={Img1} text="Enjoy great sightseeing at Mount Fuji" label='Mystery' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards