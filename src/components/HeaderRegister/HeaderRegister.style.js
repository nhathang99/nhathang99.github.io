import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  max-width: max-content
  box-shadow: 0 6px 6px rgb(0 0 0 /6%);
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
`
export const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderIcon = styled(Link)`
  margin-top: -0.5rem;
  svg {
    fill: #ee4d2d;
    height: 5rem;
    width: auto;
  }
  margin-right: 10px;
`
export const HeaderTitle = styled.div`
  color: #222;
  font-size: 2.4rem;
  margin-left: 1.2re;
  margin-top: 0.5rem;
`
