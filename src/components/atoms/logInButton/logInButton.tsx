import { Button } from '@mui/material';

interface LogInButtonProps {}

const LogInButton = () => {
  const handleClick = () => {
    // opens some sort of popup to login or redirects user to login page
  };

  return (
    <Button onClick={handleClick} size='large' variant='contained'>
      LOG IN
    </Button>
  );
};

export default LogInButton;
