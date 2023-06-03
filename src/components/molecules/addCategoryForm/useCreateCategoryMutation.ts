import { useMutation } from '@tanstack/react-query';

interface createCategoryMutationValues {
  categoryName: string;
  parentCategoryName?: string;
}

export const useCreateCategoryMutation = () => {
  const createCategoryMutation = useMutation({
    mutationFn: async ({ categoryName, parentCategoryName }: createCategoryMutationValues) => {
      await fetch('/api/adminPanel/category/create', {
        method: 'POST',
        body: JSON.stringify({
          categoryName: categoryName,
          parentCategoryName: parentCategoryName,
        }),
      });
    },
    onSuccess: async () => {
      //
    },
  });

  return createCategoryMutation;
};
