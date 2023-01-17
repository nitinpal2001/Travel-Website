import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/cardItem.css'

function CardItem({ path, src, text, label }) {
    return (
        <li className='card__item'>
            <Link className="card__item__link" to={path}>
                <figure className='card__item__picWrap' data-category={label}>
                    <img src={src} alt="Travel Image" className='card__item__image' />
                </figure>
                <div className="card__item__info">
                    <h5 className='card__item__info__text'>
                        {text}
                    </h5>
                </div>
            </Link>
        </li>
    )
}

export default CardItem