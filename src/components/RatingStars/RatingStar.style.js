import styled from 'styled-components'
export const RatingStarsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &.active {
    background-color: #ebebeb;
    border-radius: 1rem;
  }
  svg {
    width: 20px;
    margin-right: 5px;
    height: 20px;
  }
`
