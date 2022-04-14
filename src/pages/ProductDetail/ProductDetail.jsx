import { unwrapResult } from '@reduxjs/toolkit'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getId } from 'src/utils/helper'
import './productDetail.css'
import { getProductsDetail } from './productDetail.slice'
import ProductRating from 'src/components/ProductRating/ProductRating'
// import a S from './productDetail.style'
import { formatK, formatMoney, rateSale } from 'src/utils/helper'
export default function ProductDetail() {
  const [product, setProduct] = useState()
  console.log(product)
  const { productId } = useParams()
  console.log(productId)

  const dispatch = useDispatch()
  useEffect(() => {
    const realId = getId(productId)
    dispatch(getProductsDetail(realId))
      .then(unwrapResult)
      .then(res => {
        setProduct(res.data)
      })
  }, [productId])

  return (
    // <div>
    //   {product?.name ?? ''}{' '}
    //   <img src={product?.image ?? ''} alt={product?.name ?? ''} />
    // </div>
    <div className="product-briefing">
      <div className="product-images">
        <div className="ProductImgActive">
          <img src={product?.image ?? ''} alt={product?.name ?? ''} />
        </div>
        <div className="product-img-slide">
          <button className="product-icon-button-prev">
            <svg
              enableBackground="new 0 0 13 20"
              viewBox="0 0 13 20"
              x={0}
              y={0}
              className="shopee-svg-icon icon-arrow-left-bold"
            >
              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
            </svg>
          </button>
          {(product?.images ?? []).map((img, i) => (
            <div className="product-img" key={i}>
              <img src={img} />
            </div>
          ))}
          <button className="product-icon-button-next">
            <svg
              enableBackground="new 0 0 13 21"
              viewBox="0 0 13 21"
              x={0}
              y={0}
              className="shopee-svg-icon icon-arrow-right-bold"
            >
              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
            </svg>
          </button>
        </div>
      </div>
      {/* right  */}
      <div className="product-right">
        <div className="product-title">{product?.name ?? ''}</div>
        <div className="product-content">
          <div className="product-rating">
            <span className="span">{product?.rating ?? ''}</span>
            <ProductRating rating={product?.rating ?? 5} className="rating" />
          </div>
          <div className="product-sold">
            <span>{formatK(product?.sold ?? '')}</span>
            <span>đã bán</span>
          </div>
        </div>
        <div className="product-price">
          <div className="product-price-original">
            {formatMoney(product?.price_before_discount ?? 0)}
          </div>
          <div className="product-price-sale">
            {formatMoney(product?.price ?? 0)}
          </div>
          <div className="product-price-sale-percent">
            {rateSale(product?.price_before_discount ?? 0, product?.price ?? 0)}{' '}
            giảm
          </div>
        </div>
      </div>
    </div>
  )
}
