import React from 'react'
import { Link } from 'react-router-dom'
import {SHOPPING_CARD_ROUTE,SHOP_ROUTE,ORDER_ROUTE} from '../utils/consts'
export default function NavBar() {
  return (
    
    <div className='nav'>
      <Link to={SHOP_ROUTE}>Shop</Link>
      <Link to={SHOPPING_CARD_ROUTE}>Shopping Card</Link>
      <Link to={ORDER_ROUTE}>Order</Link>
    </div>
  )
}
