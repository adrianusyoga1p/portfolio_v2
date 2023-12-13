// import { forwardRef } from 'react'
import PropTypes from 'prop-types';
// import { cls } from '../utils/utils';

import { string } from "prop-types"
import { twMerge } from "tailwind-merge"

// const classes = {
//     base: 'focus:outline-none transition ease-in-out duration-300 text-center',
//     disabled: 'opacity-50 cursor-not-allowed',
//     rounded: 'rounded-full',
//     size: {
//         small: 'px-2 py-1 text-sm',
//         normal: 'px-4 py-2',
//         large: 'px-8 py-3 text-lg'
//     },
//     variant: {
//         primary: 'bg-blue-500 hover:bg-blue-800 text-white',
//         secondary: 'bg-gray-200 hover:bg-gray-800 text-gray-900 hover:text-white',
//         danger: 'bg-red-500 hover:bg-red-800 text-white'
//     }
// }

// const Button = forwardRef(({
//     children,
//     type = 'button',
//     className,
//     variant = 'primary',
//     size = 'normal',
//     rounded,
//     disabled = false,
//     ...props
//   }, ref) => (
//     <button
//       ref={ref}
//       disabled={disabled}
//       type={type}
//       className={cls(`
//         ${classes.base}
//         ${classes.size[size]}
//         ${classes.variant[variant]}
//         ${rounded && classes.rounded}
//         ${disabled && classes.disabled}
//         ${className}
//       `)}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// );

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   type: PropTypes.oneOf(['submit', 'button']),
//   className: PropTypes.string,
//   rounded: PropTypes.bool,
//   disabled: PropTypes.bool,
//   variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
//   size: PropTypes.oneOf(['small', 'normal', 'large'])
// }

// Button.displayName = "Button";

// export default Button



const Button = ({className, children, ...props}) => {
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: string
  }
  return (
    <button className={twMerge('p-2 bg-primary text-white transition-all duration-300 rounded-lg', className)} {...props}>{children}</button>
  )
}

export default Button