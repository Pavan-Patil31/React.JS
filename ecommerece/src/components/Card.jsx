import React from 'react'
import './Card.css'

const Card = ({fruit}) => {
    console.log(fruit);   //props.product = productBat
  return (
    <div style={{width:"18rem"}} className='cardOne'>
        <img src={fruit.image} alt="img not shown" className='ImgCard'/>
        <h3 className='headingCard'>{fruit.name}</h3>
        <p className='textCard'>Price : {fruit.price}</p>
        <p className='textCard'> In Stock</p>
        <button>Add to Cart </button>
    </div>
  )
}

export default Card