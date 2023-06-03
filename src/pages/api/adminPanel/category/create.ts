import { client } from '@/lib/prismadb';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ProductCategory } from 'prisma/prisma-client';

interface reqBody {
  readonly categoryName: string;
  readonly parentCategoryName?: string;
}

// Creates category with specifc name, if parentCategoryName is provided, sets parentId, if parent does not exsist, creates new record

export default async function handler(req: NextApiRequest, res: NextApiResponse<ProductCategory>) {
  const { categoryName, parentCategoryName }: reqBody = JSON.parse(req.body);

  if (req.method !== 'POST') {
    res.status(405).end();
  }

  try {
    let query: any = {
      data: {
        name: categoryName,
      },
    };

    if (parentCategoryName) {
      let parentCategory = await client.productCategory.findFirst({
        where: { name: parentCategoryName },
      });

      if (!parentCategory) {
        parentCategory = await client.productCategory.create({
          data: { name: parentCategoryName },
        });
      }

      query.data = {
        ...query.data,
        parentCategoryId: parentCategory?.id,
      };
    }

    const dbResponse = await client.productCategory.create(query);
    res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    res.statusMessage = 'Sorry!, Something went wrong while creating your category.';
    res.status(500).end();
  }
}
