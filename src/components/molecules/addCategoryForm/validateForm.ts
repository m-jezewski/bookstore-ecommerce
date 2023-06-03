interface FormValues {
  categoryName: string;
  addToParentCategory: boolean;
  parentCategoryName: string;
}

export const validateForm = ({
  categoryName,
  addToParentCategory,
  parentCategoryName,
}: FormValues) => {
  if (!categoryName) {
    return { categoryName: 'Required' };
  }
  if (addToParentCategory && !parentCategoryName) {
    return { parentCategoryName: 'Required' };
  }
};
