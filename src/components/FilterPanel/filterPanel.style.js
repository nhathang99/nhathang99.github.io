import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
export const CategoryTitleLink = styled(Link)`
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
`

export const CategoryList = styled.ul``
export const CategoryItem = styled.li`
  padding: 8px 12px 10px;
  display: flex;
  align-items: center;
  a {
    color: rgba(0, 0, 0, 0.8);
  }
  &.active {
    & > a {
      font-weight: 700;
      color: #ee4d2d !important;
    }
  }
`
export const CategoryTitle = styled.div`
  font-weight: 700;
  padding: 2rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);
  font-size: 2rem;
  align-items: center;
  display: flex;
  svg {
    width: 2rem;
    height:2rem
    margin-right: 1rem;
  }
`
export const FilterGroup = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`
export const FilterGroupHeader = styled.div`
  margin-bottom: 1rem;
`
export const PriceRange = styled.div`
  margin-bottom: 1rem auto 2rem;
`
export const PriceRangeGroup = styled.div`
  display: flex;
  align-items: center;
`
export const PriceRangeInput = styled.input`
width:8rem;
padding 1px 5px 2px;
height:3rem;
border-radius:1px;
border: 1px solid rgba(0,0,0,0.25)
`

export const PriceRangeLine = styled.div`
  margin: 0 1rem;
`
export const PriceErrorMessage = styled.div`
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  color: red;
`
export const PriceRangeButton = styled(Button)`
  margin: 2rem 0 0;
  width: 100%;
  text-transform: uppercase;
`
export const RemoveFilterButton = styled(Button)`
  margin: 2rem 0 0;
  width: 100%;
  text-transform: uppercase;
`
