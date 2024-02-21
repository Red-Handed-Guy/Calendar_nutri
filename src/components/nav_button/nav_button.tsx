import { FC } from 'react'
import styles from './nav_button.module.scss'
import Arrow from '../../icons/arrow_2.svg'

interface NavButtonInteface {
  onClick: () => void
  isArrowLeft?: boolean
  extraStyles?: string
  disabled?: boolean
}

const NavButton: FC<NavButtonInteface> = ({
  extraStyles,
  onClick,
  isArrowLeft = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`${styles.month_button} ${extraStyles} ${!disabled && styles.month_button_active}`}
      onClick={onClick}
    >
      <Arrow
        className={`${styles.arrow_svg} ${disabled && styles.arrow_svg_disabled} ${isArrowLeft && styles.arrow_svg_left}`}
      />
    </button>
  )
}

export default NavButton
