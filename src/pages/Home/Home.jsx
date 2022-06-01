import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'
import * as S from './home.style'
import { getCategories, getProducts } from './home.slice'
import useQuery from 'src/hook/useQuery'
export default function Home() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({
    products: [],
    pagination: {}
  })
  const [filters, setFilters] = useState({})
  const query = useQuery()
  // const [products, setProducts] = useState({ products: [], pagination: {} })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
      })
  }, [dispatch])
  // console.log([products])
  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 20,
      sortBy: query.sortBy || 'view'
    }
    setFilters(_filters)
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      rating_filter: _filters.rating, //Number(_filters?.rating ?? 5) ?? 5, // bị lỗi á nó sẽ nan
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_By: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    dispatch(getProducts({ params }))
      .then(unwrapResult)
      .then(res => {
        setProducts(res.data)
      })
  }, [query])
  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} filters={filters} />
        </S.Side>
        {/* right  */}
        <S.Main>
          <SearchItemResult products={products} filters={filters} />
        </S.Main>
      </S.Container>
    </div>
  )
}
