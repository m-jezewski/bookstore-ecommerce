import { LogInButton } from '../../atoms/logInButton/logInButton';
import { SignUpButton } from '../../atoms/signUpButton/signUpButton';
import { BoxWrapper, StyledHeading } from './accountPopoverContentStyles';

export const AccountPopoverContent = () => {
  return (
    <BoxWrapper>
      <StyledHeading>Guest</StyledHeading>
      <LogInButton />
      <SignUpButton />
    </BoxWrapper>
  );
};
