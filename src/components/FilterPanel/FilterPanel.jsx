import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import RatingStars from '../RatingStars/RatingStars'
import * as S from './filterPanel.style'
import PropTypes, { object } from 'prop-types'
import qs from 'query-string'
import useQuery from 'src/hook/useQuery'
import { Controller, useForm } from 'react-hook-form'

const FilterPanel = ({ categories, filters }) => {
  const query = qs.parse(window.location.search)
  const [activeId, setActiveId] = useState(query.category ?? '')
  const navigate = useNavigate()
  const query1 = useQuery()
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
    reset,
    setValue
  } = useForm({
    defaultValues: {
      minPrice: filters.minPrice || '',
      maxPrice: filters.maxPrice || ''
    },
    reValidateMode: 'onSubmit'
  })

  useEffect(() => {
    setValue('minPrice', filters.minPrice || '')
    setValue('maxPrice', filters.maxPrice || '')
  }, [setValue, filters])

  const searchPrice = data => {
    const { minPrice, maxPrice } = data
    if (minPrice !== '' || maxPrice !== '') {
      let _filters = filters
      if (minPrice !== '') {
        _filters = { ..._filters, minPrice }
      } else {
        delete _filters.minPrice
      }
      if (maxPrice !== '') {
        _filters = { ..._filters, maxPrice }
      } else {
        delete _filters.maxPrice
      }
      navigate(path.home + `?${qs.stringify(_filters)}`)
    }
  }

  const validPrice = () => {
    const minPrice = getValues('minPrice')
    const maxPrice = getValues('maxPrice')
    const message = 'vui lòng điền khoảng giá phù hợp'
    if (minPrice !== '' && maxPrice !== '') {
      return Number(maxPrice) >= Number(minPrice) || message
    }
    return minPrice !== '' || maxPrice !== '' || message
  }
  const cleanAll = () => {
    reset()
    navigate({ pathname: path.home })
  }
  return (
    <div>
      <S.CategoryTitleLink to={path.home}>
        <svg
          viewBox="0 0 12 10"
          className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate"
        >
          <g fillRule="evenodd" stroke="none" strokeWidth={1}>
            <g transform="translate(-373 -208)">
              <g transform="translate(155 191)">
                <g transform="translate(218 17)">
                  <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </S.CategoryTitleLink>
      <S.CategoryList>
        {categories.map(category => {
          return (
            <div>
              <S.CategoryItem
                key={category._id}
                className={activeId === category._id ? 'active' : ''}
                onClick={() => setActiveId(category._id)}
              >
                <Link to={path.home + `?category=${category._id}`}>
                  {category.name}
                </Link>
              </S.CategoryItem>
            </div>
          )
        })}
      </S.CategoryList>
      <S.CategoryTitle>
        {/* <BiFilterAlt /> */}
        Bộ lọc tìm kiếm
      </S.CategoryTitle>
      <S.FilterGroup>
        <S.FilterGroupHeader>khoảng giá</S.FilterGroupHeader>
        <S.PriceRange>
          <S.PriceRangeGroup>
            <Controller
              name="minPrice"
              control={control}
              rules={{ validate: { validPrice } }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placeholder="Từ"
                  onChange={field.onChange}
                  value={getValues('minPrice')}
                />
              )}
            />

            <S.PriceRangeLine>—</S.PriceRangeLine>
            {/* <S.PriceRangeInput placeholder="Đến" /> */}
            <Controller
              name="maxPrice"
              control={control}
              rules={{ validate: { validPrice } }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placeholder="Từ"
                  onChange={field.onChange}
                  value={getValues('maxPrice')}
                />
              )}
            />
          </S.PriceRangeGroup>
          {Object.values(errors).length !== 0 && (
            <S.PriceErrorMessage>
              Vui lòng điền khoảng giá phù hợp
            </S.PriceErrorMessage>
          )}

          <S.PriceRangeButton onClick={handleSubmit(searchPrice)}>
            Áp dụng
          </S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>
      <S.FilterGroup>
        <S.FilterGroupHeader>Đánh giá</S.FilterGroupHeader>
        <RatingStars filters={filters} />
      </S.FilterGroup>
      <S.RemoveFilterButton onClick={cleanAll}>Xóa tất cả</S.RemoveFilterButton>
    </div>
  )
}

FilterPanel.propTypes = {
  categories: PropTypes.array,
  filters: PropTypes.object
}

export default FilterPanel
