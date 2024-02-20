import { FC } from 'react'
import styles from './nav_button.module.scss'
import Arrow from '../../icons/arrow_2.svg'

interface NavButtonInteface {
  onClick: () => void
  isArrowLeft?: boolean
  extraStyles?: string
}

const NavButton: FC<NavButtonInteface> = ({
  extraStyles,
  onClick,
  isArrowLeft = false,
}) => {
  return (
    <button
      type="button"
      className={`${styles.month_button} ${extraStyles}`}
      onClick={onClick}
    >
      <Arrow
        className={`${styles.arrow_svg} ${isArrowLeft && styles.arrow_svg_left}`}
      />
    </button>
  )
}

export default NavButton
