import { UserIcon } from '@heroicons/react/24/outline';
import { Button, IconButton, useMediaQuery } from '@mui/material';

interface AccountButtonProps {}

// this will (probably, still thinking about that) open popover with login and register links

const AccountButton = () => {
  const upMd = useMediaQuery('(min-width: 900px)');

  if (upMd) {
    return <Button startIcon={<UserIcon height={24} width={24} />}>Account</Button>;
  }

  return (
    <IconButton aria-label='Account'>
      <UserIcon height={24} width={24} />
    </IconButton>
  );
};

export default AccountButton;
