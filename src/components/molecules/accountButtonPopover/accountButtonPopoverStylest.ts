import { Popover, styled } from '@mui/material';

export const StyledPopover = styled(Popover)(({ theme }) => ({
  zIndex: 10000,
  '& .MuiPaper-root': {
    borderRadius: '0.5rem',
    backgroundColor: 'background.default',
  },
})) as typeof Popover;
