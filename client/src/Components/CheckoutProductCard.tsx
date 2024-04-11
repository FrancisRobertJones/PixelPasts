import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ICartItem } from '../models/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { CartActionType } from '../reducers/cartReducer';
import { toast } from 'react-toastify';



interface ICheckoutProductProps {
  cartItem: ICartItem
}


const CheckoutProduct = ({ cartItem }: ICheckoutProductProps) => {

  const { dispatchCart } = useContext(CartContext)

  const removeFromCart = (name: string) => {
    dispatchCart({ type: CartActionType.REMOVEFROMCART, payload: cartItem.product })
    toast.success(`${name} removed from cart`)
  }

  return (

    <Card className='m-12' variant="outlined" sx={{ maxWidth: 400, maxHeight: 600 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {cartItem.product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {cartItem.product.default_price.unit_amount / 100} SEK
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          {cartItem.product.description}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <img src={cartItem.product.images[0]} />
      </Box>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center'>
          <div className='flex'>
            <button onClick={() => removeFromCart(cartItem.product.name)} className="btn btn-square btn-outline mx-4">
              -
            </button>
          </div>
          <div className='mt-4'>
            Quantity: {cartItem.quantity}
          </div>
        </div>
        <div className='mx-12'>Total of item: {cartItem.quantity * cartItem.product.default_price.unit_amount / 100}</div>
      </div>

    </Card>
  )
}

export default CheckoutProduct