import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Button, IconButton, useMediaQuery } from '@mui/material';

interface CartButtonProps {}

// in progress: this will be used to open drawer with all products currently in cart

const CartButton = () => {
  const upMd = useMediaQuery('(min-width: 900px)');

  if (upMd) {
    return <Button startIcon={<ShoppingCartIcon height={24} width={24} />}>Cart</Button>;
  }

  return (
    <IconButton aria-label='Cart'>
      <ShoppingCartIcon height={24} width={24} />
    </IconButton>
  );
};

export default CartButton;
