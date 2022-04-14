import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './product.style'
import ProductRating from '../ProductRating/ProductRating'
import { path } from 'src/constants/path'
import { generateNameId, formatMoney, formatK } from 'src/utils/helper'
export default function ProductItem({ product }) {
  return (
    <S.Product>
      <Link to={path.product + `/${generateNameId(product)}`}>
        <S.ProductItem>
          <S.ProductImage>
            <img src={product.image} alt={product.name} />
          </S.ProductImage>
          <S.ProductInfo>
            <S.ProductItemTitle>
              {product.name.slice(0, 40) + '...'}
            </S.ProductItemTitle>
            <S.ProductPrice>
              <S.ProductPriceOriginal>
                {formatMoney(product.price_before_discount)}
              </S.ProductPriceOriginal>
              <S.ProductPriceSale>
                {formatMoney(product.price)}
              </S.ProductPriceSale>
            </S.ProductPrice>
            <S.ProductMeta>
              <ProductRating rating={product.rating} />
              <S.ProductShow>
                <span>{formatK(product.sold)}</span>
                <span>Đã bán</span>
              </S.ProductShow>
            </S.ProductMeta>
          </S.ProductInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}
