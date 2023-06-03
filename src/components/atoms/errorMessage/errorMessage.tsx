import { StyledTypography } from './errorMessageStyles';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <StyledTypography variant='body1'>{children}</StyledTypography>;
};

export default ErrorMessage;
