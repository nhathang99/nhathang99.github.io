import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, ButtonLink } from 'src/assets/styles/utils'
export const StyleHeader = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  margin-bottom: 3rem;
  width: 100%;
  min-width: max-content;
`
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`

export const Logo = styled(Link)`
  margin-right: 4rem;
  svg {
    width: 160px;
    height: 50px;
    fill: #fff;
  }
`
export const StyleForm = styled.form`
  flex-grow: 0.5;
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  background: #fff;
  border-radius: 2px;
  height: 4rem;
`
export const StyleInput = styled.input`
  flex-grow: 1;
  border: 0;
  padding-left: 1rem;
`
export const StyleButton = styled(Button)`
  padding-left: 20px;
  padding-right: 20px;
  height: auto;
  svg {
    color: #fff;
    fill: currentColor;
  }
`
export const CartContainer = styled.div`
  position: relative;
`
export const CartIcon = styled(Link)`
  padding: 10px;
  display: inline-block;
  position: relative;
  svg {
    color: #fff;
    stroke: #fff;
    fill: currentColor;
    width: 26px;
    height: 26px;
  }
`
export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 5rem;
`
export const CartNumberBadge = styled.div`
  position: absolute;
  border-radius: 4rem;
  min-width: 11px;
  padding: 0px 5px;
  text-align: center;
  border: 2px solid #ee4d2d;
  color: #ee4d2d;
  background-color: #fff;
  line-height: 1;
  top: 2px;
  right: 2px;
`
export const PopoverContent = styled.div`
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 / 20%);
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
  width: 45rem;
`
export const PopoverTitle = styled.div`
  padding: 1.5rem 0 2rem 1rem;
  color: rgba(0, 0, 0, 0.26);
  text-transform: capitalize;
`
export const MiniProductCart = styled.div`
  display: flex;
  padding: 1rem;
`
export const MiniProductCartImg = styled.img`
  flex-shrink: 1;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`
export const MiniProductCartTitle = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
`
export const PopoverEnterAnimation = keyframes`
0%{
  transform: scale(0);
  opacity: 0;
}
to{
  transform: scale(1);
  opacity:1;
}
`
export const Drawer = styled.div`
  top: 100%;
  right: 0;
  position: absolute;
  will-change: transform;
  animation: ${PopoverEnterAnimation} 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  opacity: 1;
  z-index: 400;
border: 1px solid rgba(0,0,0,0.09)
:before {
    position: absolute;
    top: -10px;
    left: 0;
    content: '';
    opacity: 0;
    with: 100%;
  }
`
export const PopoverArrow = styled.div`
  border-bottom: 10px solid rgb(255, 255, 255);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  top: -10px;
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
`

export const MiniProductCartPrice = styled.div`
  margin-left: 4rem;
  flex-shrink: 1;
  color: #ee4d2d;
`
export const PopoverFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const MoreProduct = styled.div`
  flex-grow: 1;
  text-transform: capitalize;
`
export const ButtonShowCart = styled(ButtonLink)`
  height: 3.5rem;
  padding: 1px 15px;
  text-transform: capitalize;
  flex-shrink: 0;
`
