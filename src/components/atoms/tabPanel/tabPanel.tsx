import { Box } from '@mui/material';
import { StyledStack } from './tabPanelStyles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} {...other}>
      {value === index && <StyledStack>{children}</StyledStack>}
    </div>
  );
};

export default TabPanel;
