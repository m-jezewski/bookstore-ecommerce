import { Box, Button, Typography } from '@mui/material';
import LogInButton from '../logInButton/logInButton';
import SignUpButton from '../signUpButton/signUpButton';

interface AccountPopoverContentProps {}

const AccountPopoverContent = () => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography sx={{ textAlign: 'center' }}>Guest</Typography>
      <LogInButton />
      <SignUpButton />
    </Box>
  );
};

export default AccountPopoverContent;