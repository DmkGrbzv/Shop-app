import React from 'react'
import { useContext } from 'react';
import {Context} from "../index";
import {observer} from 'mobx-react-lite'
import { fetchCreateShop, fetchGetAllShops } from '../http/shopApi';
import {fetchCreateProduct,fetchGetAllProductsById} from '../http/productAPI';
import { useEffect } from 'react';
import { ShopsNames } from "../moc/shop";
import { ProductsExample } from '../moc/products'
import { useState } from 'react';
import StartImage from '../assets/startImage.png'
import { useMemo } from 'react';
import Product from '../components/Product';

const Shop = observer(() => {
  const {shop, product, order} = useContext(Context);
  
  const [shopsView,setShopsView] = useState([]); 
  const [productView,setProductView] = useState([]); 
  const [isEmptyDB,setIsEmptyDB] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  function getAllShopsFromDB(){
    return fetchGetAllShops().then((data)=>{
      shop.setShops(data);
      return data
    }) 
  }

  function createShop() {
      ShopsNames.forEach((item) =>{
        fetchCreateShop(item.name).then((data) => {
          let arr = [];
          arr.push(data);
          shop.setShops(arr);
        })
      });
      return
  }

  function createMOCProductsInDB(){
    if(product.IsEmptyDB){
      ProductsExample.forEach((item)=>{
        fetchCreateProduct(item.name,item.price,item.shopId,item.img);
      })
    }
    product.setIsEmptyDB(false);
    return
  }

  function checkEmptyDB(shopId){
    if(shopId){
      return fetchGetAllProductsById(shopId).then((data)=>{
        product.setProducts(data.rows);
        setProductView(product.productList);
      });
    }
    return fetchGetAllProductsById().then((data)=>{
      if(!data.length){
        product.setIsEmptyDB(true);
        return
      }
    })  
  }

  function selectShop(id){
    setIsEmptyDB(false);
    checkEmptyDB(id);
  }

  function selectProduct(product,shopId){
    if(order.selectedShopIdForOrder){
      if(order.selectedShopIdForOrder === shopId){
        setSelectedProducts([...selectedProducts,product]);
        return
      }
      alert('You should selected products only from one shop')
    }else{
      order.setSelectedShopIdForOrder(shopId);
      setSelectedProducts([...selectedProducts,product]);
    }
  }
  function setProductsToOrder(){
    order.setOrderProductsList(selectedProducts);
  }
  useEffect(()=>{
   if(selectedProducts.length){
    order.setOrderProductsList(selectedProducts);
   }
  },[selectedProducts])
  
  useEffect(() => {
    setSelectedProducts(order.orderProductsList);
    setIsEmptyDB(true);
    getAllShopsFromDB().then((data)=>{
      if(!shop.shopListData.length){
        createShop();
        return
      }
      setShopsView(shop.shopListData);
    })
    checkEmptyDB().then(()=>{
      createMOCProductsInDB();
    })
  }, []);
  
  return (
    <div className='shop_page'>
      <div className='shop__list'>
        <div className='shop__list-title'>Shops:</div>
        {shopsView.map(shop=>
          <div className='shop__item' key={shop.id} onClick={()=>selectShop(shop.id)}>
            {shop.name}
          </div>   
        )} 
      </div>
      {`${selectedProducts}`}
      <div className='shop__content'>
        {
          productView.length
          ?(  productView.map((item)=>{
              return <Product displayButton={true} product = {item} key={item.id} addingToBasket={selectProduct}></Product>
            }) 
          ) 
          :(  
            isEmptyDB
            ?(<div className='start_picture'>
            <img src={StartImage} alt="defaultPic"/>
            <div>Here can be your advertising</div>
            </div>)
            : <div>No products Here</div>
          )
        }
        
      </div>
    </div>
  )
})

export default Shop;