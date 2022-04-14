import { subYears } from 'date-fns'
import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin 3rem auto 4rem;
`
export const ButtonIcon = styled.button`
  color: rgba(0, 0, 0, 0.4);
  min-width: 4rem;
  margin: 0 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 2px;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const ButtonNoOutLine = styled.button`
  color: rgba(0, 0, 0, 0.4);
  min-width: 4rem;
  height: 3rem;
  margin: 0 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    color: #fff;
    background-color: #ee4d2d;
    transition: background 0.2s ease;
    &:hover {
      background: #f05d40;
    }
  }
`
