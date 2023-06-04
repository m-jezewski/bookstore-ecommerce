import { TypographyProps } from '@mui/material';
import { StyledTypography } from './formHeadingStyles';

interface FormHeadingProps extends TypographyProps {
  children: React.ReactNode;
  size?: 'large' | 'medium';
  color?: 'primary' | 'secondary';
}

const FormHeading = ({
  children,
  size = 'medium',
  color = 'primary',
  ...props
}: FormHeadingProps) => {
  return (
    <StyledTypography
      color={color}
      sx={size == 'large' ? { fontSize: '1.9rem' } : { fontSize: '1.3rem' }}
      {...props}>
      {children}
    </StyledTypography>
  );
};

export default FormHeading;
