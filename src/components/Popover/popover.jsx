import React, { Fragment } from 'react'
import * as S from './popover.style'
import PropTypes from 'prop-types'

export default function Popover({ activePopover, children }) {
  return (
    <Fragment>
      {activePopover && (
        <S.Drawer>
          <S.PopoverArrow />
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </Fragment>
  )
}

Popover.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
