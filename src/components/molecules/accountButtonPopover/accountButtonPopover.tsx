import { UserIcon } from '@heroicons/react/24/outline';
import { Button, IconButton, Popover, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { AccountPopoverContent } from '../accountPopoverContent/accountPopoverContent';
import { StyledPopover } from './accountButtonPopoverStylest';

export const AccountButtonPopover = () => {
  const upMd = useMediaQuery('(min-width: 900px)');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      {upMd ? (
        <Button onClick={handleClick} startIcon={<UserIcon height={24} width={24} />}>
          Account
        </Button>
      ) : (
        <IconButton onClick={handleClick} aria-label='Account'>
          <UserIcon height={24} width={24} />
        </IconButton>
      )}
      <StyledPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <AccountPopoverContent />
      </StyledPopover>
    </>
  );
};
