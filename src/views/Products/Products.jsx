import React from 'react'
import './index.scss';
import { Link, useParams } from 'react-router-dom'
import HeaderMenu from '../../componentes/HeaderMenu/HeaderMenu';
import Search from '../../componentes/Search/Search';
import ProductDetail from '../../componentes/ProductDetail/ProductDetail';

const Products = ({data}) => {

  const {productId} = useParams()
  const selectedProduct = data.find(product => product.id == productId)

  
  return (
    <section className="products">
      <HeaderMenu />
      <Search />
      <ProductDetail data={selectedProduct} />
    </section>

  )
}

export default Products