import styled from 'styled-components'

export const SortBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.03);
  padding: 1.25rem 1.5rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
`
export const SortBarLabel = styled.div``
export const SortBarOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
`
export const SortBarOptionsOption = styled.div`
  flex: 0 0 auto;
  cursor: pointer;
  background: #fff;
  margin-left: 1rem;
  height: 3.25rem;
  padding: 0 1.5rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  &.active {
    color: #fff;
    background: #ee4d2d;
  }
`
export const SortBarPrice = styled.select`
  display: flex;
  margin-left: 1rem;
  height: 3.25rem;
  border: 0;
  padding: 0 1.5rem;
  &.active {
    color: #ee4d2d;
  }
`
export const MiniPageController = styled.div`
  display: flex;
  align-items: center;
`
export const MiniPageControllerState = styled.div`
  display: flex;
`
export const MiniPageControllerCurrentState = styled.div`
  color: #ee4d2d;
`
export const ButtonControllerPrev = styled.button`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2px;
  border: none;
  background: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
    margin-top: 0.125rem;
  }
  margin-left: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #f2f2f2;
`
export const ButtonControllerNext = styled.button`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 /5%);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2px;
  border: none;
  background: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
    margin-top: 0.125rem;
  }
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
