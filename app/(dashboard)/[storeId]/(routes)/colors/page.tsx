import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { ColorClient } from "./components/client";
import { ColorColumn } from "./components/columns";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const Colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const formattedColors: ColorColumn[] = Colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createAt: format(item.createAt, "MMMM do, yyyy"),
  }));

  // console.log(params.storeId);
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt6">
          <ColorClient data={formattedColors} />
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
