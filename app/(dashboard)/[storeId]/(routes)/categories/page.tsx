import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { CategoriesClient } from "./components/client";
import { CategoriesColumn } from "./components/columns";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const Categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const formattedCategories: CategoriesColumn[] = Categories.map((item) => ({
    id: item.id,
    billboardLabel: item.billboard.label,
    name: item.name,
    createAt: format(item.createAt, "MMMM do, yyyy"),
  }));

  console.log(params.storeId);
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt6">
          <CategoriesClient data={formattedCategories} />
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
