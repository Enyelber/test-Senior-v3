import { IS_DEVELOPMENT } from '../config'
import './Footer.css'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4>React Technique Test </h4>
      <span>@enyelber</span>
      <h5>Shopping Cart with useContext & useReducer & useId</h5>
      {/* {IS_DEVELOPMENT && JSON.stringify(filters, null, 2)} */}
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  )
}
