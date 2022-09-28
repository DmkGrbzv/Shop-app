import React, { useEffect } from 'react'
import Product from '../components/Product'
import {Context} from "../index";
import { useContext } from 'react';
import {observer} from 'mobx-react-lite';

import { useState } from 'react';

export const ShoppingCard =  observer(()=>{
  const {order} = useContext(Context);
  const [orderProducts,setOrdersProduct] = useState([]);
  const [orderEmail, setOrderEmail] = useState('');
  const [orderName, setOrderName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [orderAddress, setOrderAddress] = useState('');
  
  function unique(arr) {
    let copy = JSON.parse(JSON.stringify(arr));
    copy.map(item=>item.id);
    let result = [];
    for(let item of copy){
      if(!result.includes(item.id)){
        result.push(item.id);
      }
    }
    return result;
  }
  
  useEffect(()=>{
    order.orderProductsList.map(item => item.id)
    let uniqueIDsArr = unique(order.orderProductsList);
    
    console.log(uniqueIDsArr)
    // uniqueArr.forEach(elem=>{
    //   elem.count = 0;
    //   order.orderProductsList.forEach(i=>{
    //     if(elem.id === i.id){
    //       elem.count = ++elem.count;
    //       return
    //     }
    //   })
    // })
    // console.log([order.orderProductsList,uniqueArr]);
    // setOrdersProduct(uniqueArr);
    // console.log(orderProducts);
  },[])
  return (
    <div className='shopping-card'>
      < form className='shopping-card__left-side'>
        <div className='shopping-card__input'><input type="text" required onChange={(e)=>setOrderName(e.target.value)}/><span>Name</span></div>
        <div className='shopping-card__input'><input type="email" required onChange={(e)=>setOrderEmail(e.target.value)} /><span>Email</span></div>
        <div className='shopping-card__input'><input type="tel" onChange={(e)=>setOrderPhone(e.target.value)} /><span>Telephone</span></div>
        <div className='shopping-card__input'><input type="text" onChange={(e)=>setOrderAddress(e.target.value)}/><span>Address</span></div>
      </form>
      <div className='shopping-card__right-side'>
        {
          orderProducts.length
          ?(orderProducts.map((product, index)=>
            <Product countValue={product.count} key={index} product={product} displayButton={false}/>))
          :<div>You need to choose your order</div>
        }
        <div>Tottal price</div>
      </div>
    </div>
  )
})
export default ShoppingCard;