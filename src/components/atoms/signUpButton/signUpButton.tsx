import { Button } from '@mui/material';

interface SignUpButtonProps {}

const SignUpButton = () => {
  const handleClick = () => {
    // opens some sort of popup to SignUp or redirects user to SignUp page
  };

  return (
    <Button onClick={handleClick} size='large' color='secondary' variant='contained'>
      SIGN UP
    </Button>
  );
};

export default SignUpButton;
