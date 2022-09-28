import React from 'react'

export default function Product(props) {
  return (
    <div className="cards">
      
      <div className='card__img'>
        <img src={props.product.img} alt="img" />
      </div>
      <div className='card__title'>
          {props.product.name}<span>{props.product.price}$</span>
      </div>
       {props.displayButton && <div className='card__button' onClick={()=>props.addingToBasket(props.product,props.product.shopId)}>Add to Basket</div>}
      {props.countValue && <div><input type="number" min='0' value={props.countValue}/></div>}
    </div>
  )
}
