import { Box, Button, Popover, SxProps, Theme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState, ReactNode, useEffect } from 'react';

interface OnHoverPopoverProps {
  buttonText: string;
  buttonVariant?: 'outlined' | 'contained' | 'text';
  children: ReactNode;
  buttonSx?: SxProps<Theme>;
  wrapperSx?: SxProps<Theme>;
  linkButtonComponent?: boolean;
  href?: string;
}

export const OnHoverPopover = ({
  buttonText,
  children,
  buttonVariant = 'text',
  buttonSx,
  wrapperSx,
  linkButtonComponent = false,
  href,
}: OnHoverPopoverProps) => {
  const [openPopover, setOpenPopover] = useState(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  let mouseInTarget = false;

  const handlePopoverOpen = () => {
    mouseInTarget = true;
    setOpenPopover(true);
  };

  const handlePopoverClose = () => {
    mouseInTarget = false;
    setTimeout(() => {
      if (mouseInTarget === false) {
        setOpenPopover(false);
      }
    }, 150);
  };

  useEffect(() => {
    setOpenPopover(false); // Closes popover when user clicks in link
  }, [router.pathname]);

  return (
    <>
      <Button
        LinkComponent={linkButtonComponent ? Link : undefined}
        href={href || undefined}
        variant={buttonVariant}
        component={linkButtonComponent ? Link : Button}
        aria-owns={openPopover ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        ref={anchorRef}
        sx={{ zIndex: '9999', ...buttonSx }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        {buttonText}
      </Button>
      <Popover
        id='mouse-over-popover'
        open={openPopover}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        sx={{
          '& .MuiPaper-root': {
            left: '0 !important',
            right: '0 !important',
            minWidth: '100vw',
          },
          ...wrapperSx,
        }}>
        <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
          {children}
        </Box>
      </Popover>
    </>
  );
};
