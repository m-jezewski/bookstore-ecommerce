import TabPanel from '@/components/atoms/tabPanel/tabPanel';
import AddCategoryForm from '@/components/molecules/addCategoryForm/addCategoryForm';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

export const AdminPanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Product Categories' />
          <Tab label='Products Overview' />
          <Tab label='Products Management' />
          <Tab label='Comments' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddCategoryForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Products
      </TabPanel>
      <TabPanel value={value} index={2}>
        Product Management
      </TabPanel>
      <TabPanel value={value} index={3}>
        Comments
      </TabPanel>
    </Box>
  );
};
