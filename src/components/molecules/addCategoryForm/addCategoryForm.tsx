import ErrorMessage from '@/components/atoms/errorMessage/errorMessage';
import { Button, FormLabel, Stack, Switch, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useCreateCategoryMutation } from './useCreateCategoryMutation';
import { validateForm } from './validateForm';
import FormHeading from '@/components/atoms/formHeading/formHeading';

const AddCategoryForm = () => {
  const createCategoryMutation = useCreateCategoryMutation();

  const initialValues = {
    categoryName: '',
    addToParentCategory: false,
    parentCategoryName: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={({ addToParentCategory, categoryName, parentCategoryName }, { resetForm }) => {
        if (!parentCategoryName || !addToParentCategory) {
          createCategoryMutation.mutate({ categoryName });
        } else {
          createCategoryMutation.mutate({ categoryName, parentCategoryName });
        }
        resetForm({
          values: { categoryName: '', addToParentCategory: false, parentCategoryName: '' },
        });
      }}>
      {({ values, handleChange, errors }) => (
        <Form>
          <Stack gap={1}>
            <FormHeading variant={'h2'} color='secondary'>
              Add category
            </FormHeading>
            <ErrorMessage>{errors.categoryName}</ErrorMessage>
            <TextField
              name='categoryName'
              value={values.categoryName}
              onChange={handleChange}
              label='Category Name'
            />
            <FormLabel htmlFor='addToParentCategorySwitch'>Parent category?</FormLabel>
            <Switch
              id='addToParentCategorySwitch'
              name='addToParentCategory'
              checked={values.addToParentCategory}
              onChange={handleChange}
              value={values.addToParentCategory}
            />
            <ErrorMessage>{errors.parentCategoryName}</ErrorMessage>
            {values.addToParentCategory && (
              <TextField
                name='parentCategoryName'
                value={values.parentCategoryName}
                onChange={handleChange}
                label='Parent category name'
              />
            )}
            <Button type='submit' variant='contained'>
              Add new category
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default AddCategoryForm;
